const TaskController = require("../app/controllers/taskController");
const {
  addTaskSchema,
  updateTaskSchema,
  deleteTaskSchema,
  getTaskSchema,
  getTasksSchema,
} = require("../schemas/taskSchema");
const verifyJWT = require("../middlewares/authMiddleware");

taskRoutes = (fastify, options, done) => {
  fastify.post(
    "/",
    { preHandler: [verifyJWT], schema: addTaskSchema },
    TaskController.addTask
  );
  fastify.get(
    "/",
    { preHandler: [verifyJWT], schema: getTasksSchema },
    TaskController.getTasks
  );
  fastify.get(
    "/:id",
    { preHandler: [verifyJWT], schema: getTaskSchema },
    TaskController.getTask
  );
  fastify.put(
    "/:id",
    { preHandler: [verifyJWT], schema: updateTaskSchema },
    TaskController.updateTask
  );
  fastify.delete(
    "/:id",
    { preHandler: [verifyJWT], schema: deleteTaskSchema },
    TaskController.deleteTask
  );
  done();
};
module.exports = taskRoutes;
