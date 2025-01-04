import "dotenv/config";

const config = {
  mongoURI: process.env.MONGO_URI,
  port: process.env.PORT || 4000,
};

export default config;
