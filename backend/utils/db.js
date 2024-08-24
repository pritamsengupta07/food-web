require('dotenv').config();

const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/project";

const connectdb = async () => {
    console.log("Attempting to connect to MongoDB...");
    try {
        await mongoose.connect(URI);
        console.log("Connection is successful");
    } catch (error) {
        console.error("Connection failed", error);
        process.exit(1);  // Exit process with failure
    }
};

connectdb();

module.exports = connectdb;
