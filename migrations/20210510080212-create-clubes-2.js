'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clubes2s', {
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
        type: Sequelize.STRING
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
        type: Sequelize.NUMBER
      },
      empates: {
        type: Sequelize.NUMBER
      },
      derrotas: {
        type: Sequelize.NUMBER
      },
      golsPro: {
        type: Sequelize.NUMBER
      },
      golsContra: {
        type: Sequelize.NUMBER
      },
      saldoGols: {
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
    await queryInterface.dropTable('Clubes2s');
  }
};