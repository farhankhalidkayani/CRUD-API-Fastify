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
    const result = await UserService.register(req.body, req.server);
    reply
      .code(201)
      .send(
        ResponseFactory.createSuccessResponse(
          result,
          "User registered successfully"
        )
      );
  };
  static login = async (req, reply) => {
    const result = await UserService.login(req.body, req.server);
    reply
      .code(200)
      .send(
        ResponseFactory.createSuccessResponse(
          result,
          "User logged in successfully"
        )
      );
  };

  static getUser = async (req, reply) => {
    const result = await UserService.getUser(req.user.email);
    reply
      .code(200)
      .send(
        ResponseFactory.createSuccessResponse(
          result,
          "User retrieved successfully"
        )
      );
  };
}

module.exports = UserController;
