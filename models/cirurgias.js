"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cirurgias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cirurgias.belongsTo(models.Fornecedores, {
        as: "fornecedor",
        foreignKey: "fornecedorId",
      });
      Cirurgias.hasOne(models.AcompCirurgicos, {
        foreignKey: "cirurgiaId",
      });
    }
  }
  Cirurgias.init(
    {
      nome: DataTypes.STRING,
      CID: DataTypes.STRING,
      justificativa: DataTypes.STRING,
      TUSS: DataTypes.STRING,
      materiais: DataTypes.STRING,
      observation: DataTypes.STRING,
      fornecedorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cirurgias",
    }
  );
  return Cirurgias;
};
