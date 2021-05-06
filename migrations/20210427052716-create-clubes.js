'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clubes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      urlShield: {
        type: Sequelize.STRING,
        defaultValue: "https://www.clipartmax.com/png/full/19-194040_how-to-set-use-shield-grey-svg-vector-shield-template.png"
      },
      country: {
        type: Sequelize.STRING
      },
      pontos: {
        type: Sequelize.NUMBER
      },
      jogados: {
        type: Sequelize.NUMBER
      },
      vitorias: {
        type: Sequelize.NUMBER,
        defaultValue: 0
      },
      empates: {
        type: Sequelize.NUMBER,
        defaultValue: 0
      },
      derrotas: {
        type: Sequelize.NUMBER,
        defaultValue: 0
      },
      golsPro: {
        type: Sequelize.NUMBER,
        defaultValue: 0
      },
      golsContra: {
        type: Sequelize.NUMBER,
        defaultValue: 0
      },
      saldoGols: {
        type: Sequelize.NUMBER
      },
      position: {
        type: Sequelize.NUMBER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clubes');
  }
};