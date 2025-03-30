const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {});
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        console.log(`✅ server running in port : ${process.env.PORT}`);

    } catch (error) {
        console.error("❌ MongoDB Connection Failed!", error);
        process.exit(1);
    }
};

module.exports = connectDB;
