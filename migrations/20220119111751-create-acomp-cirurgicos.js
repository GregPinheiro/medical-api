"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("AcompCirurgicos", {
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
      convenioId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      cirurgiaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      hospitalId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      dataPrevista: Sequelize.DATE,
      reserva: Sequelize.INTEGER,
      dataAprovacao: Sequelize.DATE,
      dataCirurgia: Sequelize.DATE,
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
    await queryInterface.dropTable("AcompCirurgicos");
  },
};
