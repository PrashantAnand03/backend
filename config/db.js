const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Increase timeout
            socketTimeoutMS: 45000, // Longer socket timeout
            keepAlive: true,
            keepAliveInitialDelay: 300000,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(`MongoDB connection error: ${process.env.MONGO_URI}`, error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
