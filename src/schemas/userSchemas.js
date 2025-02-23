const signUpSchema = {
  body: {
    type: "object",
    properties: {
      name: { type: "string" },
      email: { type: "string" },
      password: { type: "string" },
    },
    required: ["name", "email", "password"],
  },
  response: {
    201: {
      type: "object",
      properties: {
        status: { type: "string" },
        result: {
          type: "object",
          properties: {
            name: { type: "string" },
            email: { type: "string" },
            token: { type: "string" },
          },
        },
        message: { type: "string" },
      },
    },
  },
};

module.exports = { signUpSchema };
