"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Consultas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pacienteId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      medicoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      hospitalId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      historico: Sequelize.STRING,
      dataConsulta: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      historicoDoenca: Sequelize.STRING,
      historicoSaude: Sequelize.STRING,
      exameFisico: Sequelize.STRING,
      diagnostico: Sequelize.STRING,
      exames: Sequelize.STRING,
      status: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Consultas");
  },
};
