import mongoose from "mongoose";
import { MONGO_URL } from "../constants.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    console.log(`Conneted To Mongodb Databse ${conn.connection.host}`);
  } catch (error) {
    console.log(`Errro in Mongodb error`);
  }
};

export default connectDB;
