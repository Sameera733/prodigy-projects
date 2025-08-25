// backend/config/db.js
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // force DB name
      dbName: process.env.MONGO_DB || 'prodigy',
    });

    console.log(
      `✅ MongoDB connected: ${conn.connection.host} | DB: ${conn.connection.name}`
    );
  } catch (err) {
    console.error('❌ Mongo connection error:', err.message);
    process.exit(1);
  }
};
