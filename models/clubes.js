'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clubes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Clubes.init({
    name: DataTypes.STRING,
    urlShield: DataTypes.STRING,
    country: DataTypes.STRING,
    position: DataTypes.NUMBER,
    pts: DataTypes.NUMBER,
    J: DataTypes.NUMBER,
    V: DataTypes.NUMBER,
    E: DataTypes.NUMBER,
    D: DataTypes.NUMBER,
    GP: DataTypes.NUMBER,
    GC: DataTypes.NUMBER,
    SG: DataTypes.NUMBER,
    YC: DataTypes.NUMBER,
    RC: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Clubes',
  });
  return Clubes;
};