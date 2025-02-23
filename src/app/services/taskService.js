const TaskRepository = require("../repositories/taskRepository");
class TaskService {
  static create = async (task, userId) => {
    const result = await TaskRepository.create(task, userId);
    return result;
  };
  static getAllTasks = async (userId) => {
    const result = await TaskRepository.getAllTasks(userId);
    return result;
  };
  static getTaskById = async (taskId, userId) => {
    const result = await TaskRepository.getTaskById(taskId, userId);
    if (!result) {
      const error = new Error("Task not found");
      error.statusCode = 404;
      throw error;
    }
    return result;
  };
  static updateTask = async (taskId, task, userId) => {
    const result = await TaskRepository.updateTask(taskId, task, userId);
    if (!result) {
      const error = new Error("Task not found");
      error.statusCode = 404;
      throw error;
    }
    return result;
  };
  static deleteTask = async (taskId, userId) => {
    const result = await TaskRepository.deleteTask(taskId, userId);
    if (!result) {
      const error = new Error("Task not found");
      error.statusCode = 404;
      throw error;
    }
    return result;
  };
}

module.exports = TaskService;
