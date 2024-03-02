const mongoose = require("mongoose");
const { dbURL } = require("../secret");

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL);
        console.log("BD connected");

        mongoose.connection.on('error', (error) => {
            console.error("mongoose connection error : ", error);
        })
    } catch (error) {
        console.error("DB not connected. error : ", error.toString());
    }
}

module.exports = connectDB;
