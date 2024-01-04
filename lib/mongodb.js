import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://eshanmaduranga0329:jq0nNqU9CQwtzn7Z@cluster0.eabhg8u.mongodb.net/"
    );
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
