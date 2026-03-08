import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {

    const posts = await Post.find();

    res.json({
      data: posts
    });

  } catch (error) {

    res.status(500).json({
      message: "Error fetching posts"
    });

  }
};