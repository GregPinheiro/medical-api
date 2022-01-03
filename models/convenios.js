"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Convenios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Convenios.belongsToMany(models.Hospitais, {
        through: models.HospitalConvenios,
        foreignKey: "convenioId",
      });
    }
  }
  Convenios.init(
    {
      nome: DataTypes.STRING,
      endereco: DataTypes.STRING,
      cidade: DataTypes.STRING,
      UF: DataTypes.STRING,
      CEP: DataTypes.STRING,
      telefone: DataTypes.STRING,
      email: DataTypes.STRING,
      celular: DataTypes.STRING,
      plano: DataTypes.STRING,
      acomodacao: DataTypes.STRING,
      observation: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Convenios",
    }
  );
  return Convenios;
};
