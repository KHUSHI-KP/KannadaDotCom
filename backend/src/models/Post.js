import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  id: String,

  business: {
    en: String,
    kn: String
  },

  location: {
    en: String,
    kn: String
  },

  content: {
    en: String,
    kn: String
  },

  tags: [
    {
      en: String,
      kn: String
    }
  ],

  likes: Number,
  comments: Number,
  saves: Number,

  image: String,
  createdAt: Number
});

export default mongoose.model("Post", postSchema);