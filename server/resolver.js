const mongoose = require("mongoose");

// MongoDB Model
const Item = mongoose.model(
  "Item",
  new mongoose.Schema({
    name: String,
    description: String,
  })
);

const resolvers = {
  Query: {
    items: async () => await Item.find(),
    item: async (_, { id }) => await Item.findById(id),
  },
  Mutation: {
    addItem: async (_, { name, description }) => {
      const newItem = new Item({ name, description });
      return await newItem.save();
    },
    updateItem: async (_, { id, name, description }) => {
      const updatedItem = await Item.findByIdAndUpdate(id, { name, description }, { new: true });
      return updatedItem;
    },
    deleteItem: async (_, { id }) => {
      await Item.findByIdAndDelete(id);
      return `Item with ID ${id} deleted successfully.`;
    },
  },
};

module.exports = resolvers;
