const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });

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
        encrypt: false, 
      },
    },
  }
);

module.exports = sequelize;
