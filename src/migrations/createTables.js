const { getPool } = require("../DB/connectDB");
const userTableQuery = require("./userTableQuery");
const taskTableQuery = require("./taskTableQuery");

const createTables = async () => {
  const db = getPool();
  try {
    await db.execute(userTableQuery);
    await db.execute(taskTableQuery);
  } catch (error) {
    console.error("Error creating tables:", error);
  }
};
module.exports = createTables;
