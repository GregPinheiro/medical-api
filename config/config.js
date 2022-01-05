require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "1234",
    database: "medical-db",
    host: "localhost",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
};
