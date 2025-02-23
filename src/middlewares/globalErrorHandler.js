const ResponseFactory = require("../factories/responseFactory");

const globalErrorHandler = (error, request, reply) => {
  // Log the error for debugging
  console.error("Error:", error);

  // Default error response
  const errorResponse = ResponseFactory.createErrorResponse(
    "Internal Server Error"
  );
  let statusCode = 500;

  // Handle validation errors
  if (error.validation) {
    statusCode = 400;
    errorResponse.message = "Validation Error";
    errorResponse.result = error.validation;
  }

  // Handle custom errors with status codes
  if (error.statusCode) {
    statusCode = error.statusCode;
    errorResponse.message = error.message;
  }

  // Send error response
  reply.code(statusCode).send(errorResponse);
};

module.exports = globalErrorHandler;
