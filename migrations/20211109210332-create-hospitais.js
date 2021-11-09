'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Hospitais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      CNPJ: {
        type: Sequelize.STRING
      },
      unidade: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      UF: {
        type: Sequelize.STRING
      },
      CEP: {
        type: Sequelize.STRING
      },
      contato1: {
        type: Sequelize.STRING
      },
      contato2: {
        type: Sequelize.STRING
      },
      contato3: {
        type: Sequelize.STRING
      },
      contato4: {
        type: Sequelize.STRING
      },
      telefone1: {
        type: Sequelize.STRING
      },
      telefone2: {
        type: Sequelize.STRING
      },
      telefone3: {
        type: Sequelize.STRING
      },
      telefone4: {
        type: Sequelize.STRING
      },
      email1: {
        type: Sequelize.STRING
      },
      email2: {
        type: Sequelize.STRING
      },
      email3: {
        type: Sequelize.STRING
      },
      email4: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Hospitais');
  }
};