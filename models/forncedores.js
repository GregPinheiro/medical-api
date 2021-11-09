'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forncedores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Forncedores.init({
    nome: DataTypes.STRING,
    CNPJ: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cidade: DataTypes.STRING,
    UF: DataTypes.STRING,
    CEP: DataTypes.STRING,
    representante: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    celular: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Forncedores',
  });
  return Forncedores;
};