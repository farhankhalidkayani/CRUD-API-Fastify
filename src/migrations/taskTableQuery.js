const taskTableQuery = `
CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  userId INT,
  FOREIGN KEY (userId) REFERENCES users(id)
);
`;
module.exports = taskTableQuery;
