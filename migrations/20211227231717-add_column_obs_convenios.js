"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Convenios",
      "observation",
      Sequelize.STRING
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Convenios", "observation");
  },
};
