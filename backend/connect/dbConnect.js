const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("🔄 Connecting to MongoDB...");

    const conn = await mongoose.connect(process.env.DBCONNECT);

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    console.log(`📦 DB Name: ${conn.connection.name}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:");
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
