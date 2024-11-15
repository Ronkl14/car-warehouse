const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Model = sequelize.define(
  "Model",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false },
  { tableName: "Models" }
);

Model.associate = (models) => {
  Model.hasMany(models.Car, { foreignKey: "model_id", as: "cars" });
};

module.exports = Model; // No need for a function wrapper here
