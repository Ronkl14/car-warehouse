"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Features", [
      { name: "Sunroof" },
      { name: "Bluetooth" },
      { name: "Cruise Control" },
      { name: "Backup Camera" },
      { name: "Heated Seats" },
      { name: "Navigation System" },
      { name: "Keyless Entry" },
      { name: "Apple CarPlay" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Features", null, {});
  },
};
