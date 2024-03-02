require("dotenv").config();

const port = process.env.PORT || 4000;
const dbURL = process.env.DB_URL;

module.exports = { port, dbURL };