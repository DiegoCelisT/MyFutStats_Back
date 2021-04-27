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
    nome: DataTypes.STRING,
    urlEscudo: DataTypes.STRING,
    país: DataTypes.STRING,
    posição: DataTypes.NUMBER,
    pts: DataTypes.NUMBER,
    J: DataTypes.NUMBER,
    V: DataTypes.NUMBER,
    E: DataTypes.STRING,
    D: DataTypes.STRING,
    GP: DataTypes.NUMBER,
    GC: DataTypes.NUMBER,
    SG: DataTypes.NUMBER,
    amarelos: DataTypes.NUMBER,
    vermelhos: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Clubes',
  });
  return Clubes;
};