const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Car = sequelize.define(
  "Car",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    model_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false },
  { tableName: "Cars" }
);

Car.associate = (models) => {
  Car.belongsTo(models.Model, { foreignKey: "model_id", as: "model" });
};

module.exports = Car; // No need for a function wrapper here
