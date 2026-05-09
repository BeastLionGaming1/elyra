import mongoose from "mongoose";
import { ENV } from "./env.js";

const connectDB = async () => {
  try {
    if (!ENV.MONGO_URI) {
      console.log('MONGO_URI is not defined.');
    }
    console.log(ENV.MONGO_URI);
    const conn = mongoose.connect(ENV.MONGO_URI);
    console.log(`Server Connected to DB at: ${conn.connection.host}`);
    
  }catch(err) {
    console.log("Error Trying to connect to database:", err);
    // process.exit(1); // 1 means failure, it will stop the program from running
  }
}

export default connectDB;