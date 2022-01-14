"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Consultas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Consultas.belongsTo(models.Pacientes, {
        as: "paciente",
        foreignKey: "pacienteId",
      });
      Consultas.belongsTo(models.Medicos, {
        as: "medico",
        foreignKey: "medicoId",
      });
      Consultas.belongsTo(models.Hospitais, {
        as: "hospital",
        foreignKey: "hospitalId",
      });
    }
  }
  Consultas.init(
    {
      pacienteId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      medicoId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      hospitalId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      historico: DataTypes.STRING,
      dataConsulta: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      historicoDoenca: DataTypes.STRING,
      historicoSaude: DataTypes.STRING,
      exameFisico: DataTypes.STRING,
      diagnostico: DataTypes.STRING,
      exames: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Consultas",
    }
  );
  return Consultas;
};
