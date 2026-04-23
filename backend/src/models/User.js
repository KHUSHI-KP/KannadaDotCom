import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
    lowercase: true,
    trim: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    enum: [
      "Business Owner",
      "Aspiring Entrepreneur",
      "Content Creator",
      "Service Provider",
      "Freelancer",
      "Digital Marketer",
      "Student / Learner",
      "Job Seeker",
      "Investor",
      "Guest"
    ],
    default: "Guest"
  }
});

export default mongoose.model("User", userSchema);