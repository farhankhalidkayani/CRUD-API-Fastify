const { getPool } = require("../../DB/connectDB");

class TaskRepository {
  static create = async (task, userId) => {
    this.db = getPool();
    const { title, description } = task;
    const query =
      "INSERT INTO tasks (title, description, userId) VALUES (?, ?, ?)";
    const [result] = await this.db.execute(query, [title, description, userId]);
    return await this.getTaskById(result.insertId, userId);
  };

  static getTaskById = async (taskId, userId) => {
    this.db = getPool();
    const query = "SELECT * FROM tasks WHERE id = ? AND userId = ?";
    const [result] = await this.db.execute(query, [taskId, userId]);
    return result[0];
  };

  static getAllTasks = async (userId) => {
    this.db = getPool();
    const query = "SELECT * FROM tasks WHERE userId = ?";
    const [result] = await this.db.execute(query, [userId]);
    return result;
  };
  static updateTask = async (taskId, task, userId) => {
    this.db = getPool();
    const { title, description } = task;
    const query =
      "UPDATE tasks SET title = ?, description = ? WHERE id = ? AND userId = ?";
    await this.db.execute(query, [title, description, taskId, userId]);
    return await this.getTaskById(taskId, userId);
  };
  static deleteTask = async (taskId, userId) => {
    this.db = getPool();
    const task = await this.getTaskById(taskId, userId);
    const query = "DELETE FROM tasks WHERE id = ? AND userId = ?";
    await this.db.execute(query, [taskId, userId]);
    return task;
  };
}

module.exports = TaskRepository;
