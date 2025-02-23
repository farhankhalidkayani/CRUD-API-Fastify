const addTaskSchema = {
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
  body: {
    type: "object",
    properties: {
      title: { type: "string" },
      description: { type: "string" },
    },
    required: ["title", "description"],
  },
  response: {
    201: {
      type: "object",
      properties: {
        status: { type: "string" },
        result: {
          type: "object",
          properties: {
            id: { type: "number" },
            title: { type: "string" },
            description: { type: "string" },
          },
        },
        message: { type: "string" },
      },
    },
  },
};

const updateTaskSchema = {
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
  body: {
    type: "object",
    properties: {
      title: { type: "string" },
      description: { type: "string" },
    },
    required: ["title", "description"],
  },
  response: {
    200: {
      type: "object",
      properties: {
        status: { type: "string" },
        result: {
          type: "object",
          properties: {
            id: { type: "number" },
            title: { type: "string" },
            description: { type: "string" },
          },
        },
        message: { type: "string" },
      },
    },
  },
};

const deleteTaskSchema = {
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
  params: {
    type: "object",
    properties: {
      id: { type: "string" },
    },
    required: ["id"],
  },
  response: {
    200: {
      type: "object",
      properties: {
        status: { type: "string" },
        result: {
          type: "object",
          properties: {
            id: { type: "number" },
            title: { type: "string" },
            description: { type: "string" },
          },
        },
        message: { type: "string" },
      },
    },
  },
};

const getTaskSchema = {
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
  params: {
    type: "object",
    properties: {
      id: { type: "string" },
    },
    required: ["id"],
  },
  response: {
    200: {
      type: "object",
      properties: {
        status: { type: "string" },
        result: {
          type: "object",
          properties: {
            id: { type: "number" },
            title: { type: "string" },
            description: { type: "string" },
          },
        },
        message: { type: "string" },
      },
    },
  },
};

const getTasksSchema = {
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
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "number" },
              title: { type: "string" },
              description: { type: "string" },
            },
          },
        },
        message: { type: "string" },
      },
    },
  },
};

module.exports = {
  addTaskSchema,
  updateTaskSchema,
  deleteTaskSchema,
  getTaskSchema,
  getTasksSchema,
};
