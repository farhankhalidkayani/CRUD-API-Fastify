const UserRepository = require("../repositories/userRepository");
const PasswordUtils = require("../../utils/passwordUtils");
const generateToken = require("../../utils/generateToken");
const fastify = require("../../server");

class UserService {
  static register = async (data, fastify) => {
    data.password = await PasswordUtils.hashPassword(data.password);
    const result = await UserRepository.create(data);
    result.token = generateToken(fastify, result);

    return result;
  };
  static checkIfUserExists = async (email) => {
    const result = await UserRepository.getUserByEmail(email);
    return result ? true : false;
  };
}
module.exports = UserService;
