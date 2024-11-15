"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("CarFeatures", [
      {
        car_id: 1,
        feature_id: 1,
      },
      {
        car_id: 1,
        feature_id: 2,
      },
      {
        car_id: 1,
        feature_id: 3,
      },
      {
        car_id: 2,
        feature_id: 4,
      },
      {
        car_id: 2,
        feature_id: 5,
      },
      {
        car_id: 3,
        feature_id: 6,
      },
      {
        car_id: 3,
        feature_id: 7,
      },
      {
        car_id: 4,
        feature_id: 6,
      },
      {
        car_id: 4,
        feature_id: 8,
      },
      {
        car_id: 5,
        feature_id: 4,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CarFeatures", null, {});
  },
};
