import "dotenv/config";

const config = {
  mongoURI: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DATABASE}`,
  port: process.env.PORT || 4000,
};

export default config;
