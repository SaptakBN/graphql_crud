import mongoose from "mongoose";

// MongoDB Model
const Post = mongoose.model(
  "Post",
  new mongoose.Schema({
    title: String,
    description: String,
  })
);

export default Post;
