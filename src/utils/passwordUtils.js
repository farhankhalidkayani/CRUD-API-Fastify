const bcrypt = require("bcryptjs");

class PasswordUtils {
  static hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };

  static comparePasswords = async (password, hash) => {
    return await bcrypt.compare(password, hash);
  };
}

module.exports = PasswordUtils;
