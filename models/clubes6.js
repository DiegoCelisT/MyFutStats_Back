'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clubes6 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Clubes6.init({
    name: DataTypes.STRING,
    urlShield: DataTypes.STRING,
    country: DataTypes.STRING,
    pontos: DataTypes.NUMBER,
    jogados: DataTypes.NUMBER,
    vitorias: DataTypes.NUMBER,
    empates: DataTypes.NUMBER,
    derrotas: DataTypes.NUMBER,
    golsPro: DataTypes.NUMBER,
    golsContra: DataTypes.NUMBER,
    saldoGols: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Clubes6',
  });
  return Clubes6;
};