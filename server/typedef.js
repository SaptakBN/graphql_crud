const { gql } = require("graphql-tag");

const typeDefs = gql`
  type Item {
    id: ID!
    name: String!
    description: String!
  }

  type Query {
    items: [Item!]!
    item(id: ID!): Item
  }

  type Mutation {
    addItem(name: String!, description: String!): Item!
    updateItem(id: ID!, name: String, description: String): Item!
    deleteItem(id: ID!): String!
  }
`;

module.exports = typeDefs;
