const generateToken = (fastify, user) => {
  return fastify.jwt.sign({ id: user.id, name: user.name, email: user.email });
};

module.exports = generateToken;
