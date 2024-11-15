"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Cars", [
      {
        model_id: 1,
        year: 2020,
        price: 20000,
        mileage: 15000,
      },
      {
        model_id: 2,
        year: 2018,
        price: 18000,
        mileage: 25000,
      },
      {
        model_id: 2,
        year: 2022,
        price: 23000,
        mileage: 34000,
      },
      {
        model_id: 3,
        year: 2019,
        price: 22000,
        mileage: 20000,
      },
      {
        model_id: 4,
        year: 2021,
        price: 27000,
        mileage: 10000,
      },
      {
        model_id: 4,
        year: 2021,
        price: 20000,
        mileage: 15000,
      },
      {
        model_id: 5,
        year: 2024,
        price: 50000,
        mileage: 0,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cars", null, {});
  },
};
