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

  static login = async (data, fastify) => {
    const user = await UserRepository.getUserByEmail(data.email);
    if (!user) {
      throw new Error("Invalid email");
    }
    const validPassword = await PasswordUtils.comparePasswords(
      data.password,
      user.password
    );
    if (!validPassword) {
      throw new Error("Invalid password");
    }
    user.token = generateToken(fastify, user);
    return user;
  };

  static getUser = async (email) => {
    const user = await UserRepository.getUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  };
}
module.exports = UserService;
