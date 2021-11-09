'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pacientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      CPF: {
        type: Sequelize.STRING
      },
      dataNasc: {
        type: Sequelize.DATE
      },
      endereco: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      uf: {
        type: Sequelize.STRING
      },
      CEP: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      celular: {
        type: Sequelize.STRING
      },
      noCarteirinha: {
        type: Sequelize.STRING
      },
      dataInclusao: {
        type: Sequelize.DATE
      },
      validade: {
        type: Sequelize.DATE
      },
      login: {
        type: Sequelize.STRING
      },
      senha: {
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
    await queryInterface.dropTable('Pacientes');
  }
};