const mysql = require("mysql2/promise");
let pool;

const connectDB = async () => {
  try {
    pool = await mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
};

const getPool = () => {
  return pool;
};

module.exports = { connectDB, getPool };
