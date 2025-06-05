const mysql2 = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql2.createPool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

module.exports = db.promise();
