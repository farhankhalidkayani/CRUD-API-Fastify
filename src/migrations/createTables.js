const { getPool } = require("../DB/connectDB");
const userTableQuery = require("./userTableQuery");

const createTables = async () => {
  const db = getPool();
  try {
    await db.execute(userTableQuery);
  } catch (error) {
    console.error("Error creating tables:", error);
  }
};
module.exports = createTables;
