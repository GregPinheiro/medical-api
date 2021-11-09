'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Medicos.init({
    nome: {
      allowNull: false,
      type: DataTypes.STRING
    },
    especialidade: DataTypes.STRING,
    CRO_CRM: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cidade: DataTypes.STRING,
    UF: DataTypes.STRING,
    CEP: DataTypes.STRING,
    telefone: DataTypes.STRING,
    celular: DataTypes.STRING,
    email: DataTypes.STRING,
    secretaria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Medicos',
  });
  return Medicos;
};