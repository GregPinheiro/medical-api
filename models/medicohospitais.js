"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MedicoHospitais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  MedicoHospitais.init(
    {
      medicoId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      hospitalId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "MedicoHospitais",
    }
  );
  return MedicoHospitais;
};
