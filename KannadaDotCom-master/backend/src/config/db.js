import mongoose from "mongoose";

const ensureUserEmailIndex = async () => {
  const users = mongoose.connection.collection("users");
  const indexes = await users.indexes();
  const emailIndex = indexes.find((idx) => idx.name === "email_1");

  // Legacy builds created a non-sparse unique email index that blocks
  // multiple mobile-only users (email=null). Recreate it as sparse unique.
  if (emailIndex && emailIndex.unique && !emailIndex.sparse) {
    await users.dropIndex("email_1");
    await users.createIndex({ email: 1 }, { unique: true, sparse: true, name: "email_1" });
    console.log("Updated users.email_1 index to sparse unique");
  }
};

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    await ensureUserEmailIndex();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;