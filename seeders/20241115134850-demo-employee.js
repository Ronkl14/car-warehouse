"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Employee", [
      {
        first_name: "Yossi",
        last_name: "Levi",
        starting_date: new Date("2020-02-15"),
      },
      {
        first_name: "Maya",
        last_name: "Cohen",
        starting_date: new Date("2019-06-01"),
      },
      {
        first_name: "David",
        last_name: "Ben-Ari",
        starting_date: new Date("2021-09-10"),
      },
      {
        first_name: "Rachel",
        last_name: "Shamir",
        starting_date: new Date("2022-11-30"),
      },
      {
        first_name: "Avi",
        last_name: "Goldberg",
        starting_date: new Date("2023-03-25"),
      },
      {
        first_name: "Noa",
        last_name: "Mizrahi",
        starting_date: new Date("2021-07-14"),
      },
      {
        first_name: "Eli",
        last_name: "Harel",
        starting_date: new Date("2022-01-05"),
      },
      {
        first_name: "Tamar",
        last_name: "Rosenberg",
        starting_date: new Date("2020-08-19"),
      },
      {
        first_name: "Yonatan",
        last_name: "Kaplan",
        starting_date: new Date("2021-04-22"),
      },
      {
        first_name: "Shira",
        last_name: "Zohar",
        starting_date: new Date("2019-12-17"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Employee", null, {});
  },
};
