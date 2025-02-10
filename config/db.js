const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        // 'mongodb://127.0.0.1:27017/internship'
        console.log('MongoDB connected');
    } catch (error) {
        console.error(`MongoDB connection error: ${process.env.MONGO_URI}`, error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
