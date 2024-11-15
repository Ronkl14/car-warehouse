const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Feature = sequelize.define(
  "Feature",
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
  { tableName: "Features" }
);

Feature.associate = (models) => {
  Feature.belongsToMany(models.Car, {
    through: models.CarFeature,
    foreignKey: "feature_id",
    as: "cars",
  });
};

module.exports = Feature;
