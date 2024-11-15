"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Models", [
      { manufacturer: "Toyota", name: "Corolla" },
      { manufacturer: "Toyota", name: "Auris" },
      { manufacturer: "Honda", name: "Civic" },
      { manufacturer: "Mazda", name: "CX-5" },
      { manufacturer: "Tesla", name: "Cybertruck" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Models", null, {});
  },
};
