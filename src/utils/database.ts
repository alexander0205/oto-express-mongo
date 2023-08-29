import mongoose from 'mongoose';

const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/oto-express';
export const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbUri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
};
