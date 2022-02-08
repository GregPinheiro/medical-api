"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Reembolsos", {
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
      procedimentoId: {
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
      convenioId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      fornecedorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      dataPedido: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      dataCirurgia: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      valor: {
        allowNull: true,
        type: Sequelize.DECIMAL,
      },
      nf: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      dataRecebimento: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      statusId: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      status: {
        allowNull: true,
        type: Sequelize.STRING,
      },
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
    await queryInterface.dropTable("Reembolsos");
  },
};
