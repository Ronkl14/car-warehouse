const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });

// Create a Sequelize instance and configure it with your database info
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mssql",
    logging: false,
    dialectOptions: {
      options: {
        encrypt: false, // Use this if you're connecting to Azure, set to false if not
      },
    },
  }
);

module.exports = sequelize;
