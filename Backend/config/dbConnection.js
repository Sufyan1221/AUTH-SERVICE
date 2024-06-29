import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
configDotenv()
// Replace the below connection string with your actual MongoDB connection string
const MONGODB_URI = process.env.MONGODB_URI ;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    process.exit(1);
  }
};

export default connectDB;
export {mongoose}
