"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ReembolsoStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ReembolsoStatus.hasOne(models.Reembolsos, {
        foreignKey: "statusId",
      });
    }
  }
  ReembolsoStatus.init(
    {
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ReembolsoStatus",
      tableName: "ReembolsoStatus",
    }
  );
  return ReembolsoStatus;
};
