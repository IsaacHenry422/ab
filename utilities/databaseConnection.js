const mongoose = require('mongoose');
const logger = require('./logger');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        logger.info('MongoDB Connected');
    } catch (error) {
        logger.error('MongoDB Connection Error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;