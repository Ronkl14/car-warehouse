const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");

const AccidentHistory = sequelize.define(
  "AccidentHistory",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    car_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    costs: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "AccidentHistory",
  }
);

AccidentHistory.associate = (models) => {
  AccidentHistory.belongsTo(models.Car, { foreignKey: "car_id", as: "car" });
};

module.exports = AccidentHistory;
