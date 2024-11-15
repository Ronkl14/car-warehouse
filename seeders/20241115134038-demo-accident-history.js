"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("AccidentHistory", [
      {
        car_id: 1,
        date: new Date("2022-05-15"),
        description: "Rear-ended by another vehicle at a traffic light",
        costs: 1500,
      },
      {
        car_id: 2,
        date: new Date("2023-08-07"),
        description: "Side collision while parking in a tight space",
        costs: 1200,
      },
      {
        car_id: 4,
        date: new Date("2023-03-18"),
        description: "Left-side mirror was hit by another vehicle while parked",
        costs: 500,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AccidentHistory", null, {});
  },
};
