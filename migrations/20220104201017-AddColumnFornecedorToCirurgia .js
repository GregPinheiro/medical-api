"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Cirurgias",
      "fornecedorId",
      Sequelize.INTEGER
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Cirurgias", "fornecedorId");
  },
};
