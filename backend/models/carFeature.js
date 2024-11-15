const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const CarFeature = sequelize.define(
  "CarFeature",
  {
    car_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    feature_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  { timestamps: false },
  { tableName: "CarFeatures" }
);

module.exports = CarFeature;
