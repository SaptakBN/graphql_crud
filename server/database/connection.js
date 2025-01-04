import mongoose from "mongoose";

const connectToDatabase = ({ url }) =>
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to MongoDB at " + url);
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB", error);
    });

export default connectToDatabase;
