const UserController = require("../app/controllers/userController");
const {
  signUpSchema,
  loginSchema,
  getUserSchema,
} = require("../schemas/userSchemas");
const verifyJWT = require("../middlewares/authMiddleware");

const userRoutes = (fastify, options, done) => {
  fastify.post("/register", { schema: signUpSchema }, UserController.register);
  fastify.post("/login", { schema: loginSchema }, UserController.login);
  fastify.get(
    "/",
    {
      preHandler: [verifyJWT],
      schema: getUserSchema,
    },
    UserController.getUser
  );

  done();
};

module.exports = userRoutes;
