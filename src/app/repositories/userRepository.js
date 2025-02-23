const { getPool } = require("../../DB/connectDB");

class UserRepository {
  static create = async (data) => {
    this.db = getPool();
    const { name, password, email } = data;
    const query = "INSERT INTO users (name, password, email) VALUES (?, ?, ?)";
    const [result] = await this.db.execute(query, [name, password, email]);
    return await this.getUserByEmail(email);
  };

  static getUserByEmail = async (email) => {
    this.db = getPool();
    const query = "SELECT * FROM users WHERE email = ?";
    const [result] = await this.db.execute(query, [email]);
    return result[0];
  };
}

module.exports = UserRepository;
