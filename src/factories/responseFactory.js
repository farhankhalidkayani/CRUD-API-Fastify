class ResponseFactory {
  static createSuccessResponse = (data, message) => {
    return {
      status: "success",
      result: data,
      message: message,
    };
  };

  static createErrorResponse = (message) => {
    return {
      status: "error",
      result: {},
      message: message,
    };
  };
}

module.exports = ResponseFactory;
