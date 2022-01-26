"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AcompCirurgicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AcompCirurgicos.belongsTo(models.Pacientes, {
        as: "paciente",
        foreignKey: "pacienteId",
      });
      AcompCirurgicos.belongsTo(models.Convenios, {
        as: "convenio",
        foreignKey: "convenioId",
      });
      AcompCirurgicos.belongsTo(models.Cirurgias, {
        as: "cirurgia",
        foreignKey: "cirurgiaId",
      });
      AcompCirurgicos.belongsTo(models.Hospitais, {
        as: "hospital",
        foreignKey: "hospitalId",
      });
    }
  }
  AcompCirurgicos.init(
    {
      pacienteId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      convenioId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      cirurgiaId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      hospitalId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      dataPrevista: DataTypes.DATE,
      reserva: DataTypes.INTEGER,
      dataAprovacao: DataTypes.DATE,
      dataCirurgia: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AcompCirurgicos",
    }
  );
  return AcompCirurgicos;
};
