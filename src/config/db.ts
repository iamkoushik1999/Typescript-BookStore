import mongoose from 'mongoose';
import 'dotenv/config';

// --------------------------------------------------------------

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URL as string);
  console.log(`MONGODB CONNECTED AT :-> ${conn.connection.host}`);
};

mongoose.connection.on('disconnected', () => {
  console.log('MONGODB DISCONNECTED');
});

mongoose.connection.on('connected', () => {
  console.log('MONGODB CONNECTED');
});

export default connectDB;
