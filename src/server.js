const fastify = require("fastify")({ logger: true });
const swagger = require("@fastify/swagger");
const swaggerUI = require("@fastify/swagger-ui");
const { connectDB } = require("./DB/connectDB");
const fastifyJWT = require("fastify-jwt");
const createTables = require("./migrations/createTables");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
require("dotenv").config();

fastify.register(swagger, {
  swagger: {
    info: {
      title: "Fastify API",
      description: "API documentation",
      version: "1.0.0",
    },
  },
});

fastify.register(swaggerUI, {
  routePrefix: "/docs",
  exposeRoute: true,
});
fastify.register(fastifyJWT, { secret: process.env.JWT_SECRET });

fastify.register(require("./routes/userRoutes"), { prefix: "/api/v1/user" });

// Register the global error handler
fastify.setErrorHandler(globalErrorHandler);

connectDB().then(() => {
  createTables();
  console.log("Tables created successfully");
});

fastify.listen({ port: process.env.PORT || 8000 });
