import mongoose from "mongoose";

const Connection = async () => {
  const url = process.env.DB_URL

  try {
    await mongoose.connect(url, { useNewUrlParser: true });
    console.log("db connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default Connection;
