const UserController = require("../app/controllers/userController");
const { signUpSchema } = require("../schemas/userSchemas");

const userRoutes = (fastify, options, done) => {
  fastify.post("/register", { schema: signUpSchema }, UserController.register);
  done();
};

module.exports = userRoutes;
