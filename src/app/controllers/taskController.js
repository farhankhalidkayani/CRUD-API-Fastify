const TaskService = require("../services/taskService");
const ResponseFactory = require("../..//factories/responseFactory");

class TaskController {
  static async addTask(req, reply) {
    const result = await TaskService.create(req.body, req.user.id);

    return reply
      .code(201)
      .send(
        ResponseFactory.createSuccessResponse(
          result,
          "Task created successfully"
        )
      );
  }
  static getTasks = async (req, reply) => {
    const result = await TaskService.getAllTasks(req.user.id);
    return reply
      .code(200)
      .send(ResponseFactory.createSuccessResponse(result, "Tasks retrieved"));
  };
  static getTask = async (req, reply) => {
    const result = await TaskService.getTaskById(req.params.id, req.user.id);
    return reply
      .code(200)
      .send(ResponseFactory.createSuccessResponse(result, "Task retrieved"));
  };
  static updateTask = async (req, reply) => {
    const result = await TaskService.updateTask(
      req.params.id,
      req.body,
      req.user.id
    );
    return reply
      .code(200)
      .send(
        ResponseFactory.createSuccessResponse(
          result,
          "Task updated successfully"
        )
      );
  };
  static deleteTask = async (req, reply) => {
    const result = await TaskService.deleteTask(req.params.id, req.user.id);
    return reply
      .code(200)
      .send(ResponseFactory.createSuccessResponse(result, "Task deleted"));
  };
}

module.exports = TaskController;
