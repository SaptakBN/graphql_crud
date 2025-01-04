import Post from "../models/post.model.js";
import { gql } from "graphql-tag";

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    description: String!
  }

  type Query {
    posts: [Post!]!
    post(id: ID!): Post
  }

  type Mutation {
    addItem(title: String!, description: String!): Post!
    updateItem(id: ID!, title: String, description: String): Post!
    deleteItem(id: ID!): String!
  }
`;

const resolvers = {
  Query: {
    posts: async () => await Post.find(),
    post: async (_, { id }) => await Post.findById(id),
  },
  Mutation: {
    addItem: async (_, { title, description }) => {
      if (!title || !description) throw new Error("Missing required fields");
      const newItem = new Post({ title, description });
      if (!newItem) throw new Error("Failed to create new item");

      // Save new item
      console.log(newItem);
      return await newItem.save();
    },
    updateItem: async (_, { id, title, description }) => {
      const updatedItem = await Post.findByIdAndUpdate(id, { title, description }, { new: true });
      return updatedItem;
    },
    deleteItem: async (_, { id }) => {
      await Post.findByIdAndDelete(id);
      return `Post with ID ${id} deleted successfully.`;
    },
  },
};

export { typeDefs, resolvers };
