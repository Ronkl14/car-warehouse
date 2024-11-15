"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CarFeatures", {
      car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Cars",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      feature_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Features",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("CarFeatures");
  },
};
