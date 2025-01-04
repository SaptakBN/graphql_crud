import { ApolloServer } from "@apollo/server";
import { typeDefs, resolvers } from "../defs_resolvers/post_defs_resolver.js";

const createApolloServer = () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  return server;
};

export default createApolloServer;
