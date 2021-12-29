"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Cirurgias",
      "observation",
      Sequelize.STRING
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Cirurgias", "observation");
  },
};
