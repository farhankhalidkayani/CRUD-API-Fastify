const ResponseFactory = require("../../factories/responseFactory");
const UserService = require("../services/userService");

class UserController {
  static register = async (req, reply) => {
    const exists = await UserService.checkIfUserExists(req.body.email);
    if (exists) {
      reply
        .code(409)
        .send(ResponseFactory.createErrorResponse("User already exists"));
    }
    const result = await UserService.register(req.body, req.server); // Pass the Fastify instance
    reply
      .code(201)
      .send(
        ResponseFactory.createSuccessResponse(
          result,
          "User registered successfully"
        )
      );
  };
}

module.exports = UserController;
