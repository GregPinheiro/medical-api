"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pacientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pacientes.belongsTo(models.Medicos, {
        as: "medico",
        foreignKey: "medicoId",
      });
      Pacientes.belongsTo(models.Convenios, {
        as: "convenio",
        foreignKey: "convenioId",
      });
      Pacientes.hasOne(models.Consultas, {
        foreignKey: "pacienteId",
      });
      Pacientes.hasOne(models.AcompCirurgicos, {
        foreignKey: "pacienteId",
      });
    }
  }
  Pacientes.init(
    {
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      CPF: DataTypes.STRING,
      dataNasc: DataTypes.DATE,
      endereco: DataTypes.STRING,
      cidade: DataTypes.STRING,
      UF: DataTypes.STRING,
      CEP: DataTypes.STRING,
      telefone: DataTypes.STRING,
      celular: DataTypes.STRING,
      email: DataTypes.STRING,
      noCarteirinha: DataTypes.STRING,
      dataInclusao: DataTypes.DATE,
      validade: DataTypes.DATE,
      login: DataTypes.STRING,
      senha: DataTypes.STRING,
      observation: DataTypes.STRING,
      convenioId: DataTypes.INTEGER,
      medicoId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Pacientes",
    }
  );
  return Pacientes;
};
