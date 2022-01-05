"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hospitais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hospitais.belongsToMany(models.Medicos, {
        through: models.MedicoHospitais,
        foreignKey: "hospitalId",
      });
      Hospitais.belongsToMany(models.Convenios, {
        as: "convenios",
        through: models.HospitalConvenios,
        foreignKey: "hospitalId",
      });
    }
  }
  Hospitais.init(
    {
      nome: DataTypes.STRING,
      CNPJ: DataTypes.STRING,
      unidade: DataTypes.STRING,
      endereco: DataTypes.STRING,
      cidade: DataTypes.STRING,
      UF: DataTypes.STRING,
      CEP: DataTypes.STRING,
      contato1: DataTypes.STRING,
      contato2: DataTypes.STRING,
      contato3: DataTypes.STRING,
      contato4: DataTypes.STRING,
      telefone1: DataTypes.STRING,
      telefone2: DataTypes.STRING,
      telefone3: DataTypes.STRING,
      telefone4: DataTypes.STRING,
      email1: DataTypes.STRING,
      email2: DataTypes.STRING,
      email3: DataTypes.STRING,
      email4: DataTypes.STRING,
      observation: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Hospitais",
    }
  );
  return Hospitais;
};
