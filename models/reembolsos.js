"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reembolsos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reembolsos.belongsTo(models.Pacientes, {
        as: "paciente",
        foreignKey: "pacienteId",
      });
      Reembolsos.belongsTo(models.Cirurgias, {
        as: "cirurgia",
        foreignKey: "procedimentoId",
      });
      Reembolsos.belongsTo(models.Medicos, {
        as: "medico",
        foreignKey: "medicoId",
      });
      Reembolsos.belongsTo(models.Hospitais, {
        as: "hospital",
        foreignKey: "hospitalId",
      });
      Reembolsos.belongsTo(models.Convenios, {
        as: "convenio",
        foreignKey: "convenioId",
      });
      Reembolsos.belongsTo(models.Fornecedores, {
        as: "fornecedor",
        foreignKey: "fornecedorId",
      });
      Reembolsos.belongsTo(models.ReembolsoStatus, {
        as: "statusDetail",
        foreignKey: "statusId",
      });
    }
  }
  Reembolsos.init(
    {
      pacienteId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      procedimentoId: {
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
      convenioId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      fornecedorId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      dataPedido: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      dataCirurgia: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      valor: {
        allowNull: true,
        type: DataTypes.DECIMAL,
      },
      nf: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      dataRecebimento: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      statusId: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      status: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Reembolsos",
    }
  );
  return Reembolsos;
};
