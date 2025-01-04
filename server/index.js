import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import cors from "cors";
import connectToDatabase from "./database/connection.js";
import config from "./config/config.js";
import createApolloServer from "./apollo/apollo_server.js";

const app = express();
const PORT = config.port;

// MongoDB connection
connectToDatabase({ url: config.mongoURI });

// Apollo Server setup
const server = createApolloServer();

const startServer = async () => {
  await server.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/graphql`);
  });
};

startServer();
