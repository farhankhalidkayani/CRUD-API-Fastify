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

const loginSchema = {
  body: {
    type: "object",
    properties: {
      email: { type: "string" },
      password: { type: "string" },
    },
    required: ["email", "password"],
  },
  response: {
    200: {
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

const getUserSchema = {
  headers: {
    type: "object",
    properties: {
      Authorization: {
        type: "string",
        pattern: "^Bearer\\s[\\w-]+\\.[\\w-]+\\.[\\w-]+$",
      },
    },
    required: ["Authorization"],
  },
  response: {
    200: {
      type: "object",
      properties: {
        status: { type: "string" },
        result: {
          type: "object",
          properties: {
            name: { type: "string" },
            email: { type: "string" },
          },
        },
        message: { type: "string" },
      },
    },
  },
};

module.exports = { signUpSchema, loginSchema, getUserSchema };
