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
      nome: {
        type: Sequelize.STRING
      },
      urlEscudo: {
        type: Sequelize.STRING
      },
      país: {
        type: Sequelize.STRING
      },
      posição: {
        type: Sequelize.NUMBER
      },
      pts: {
        type: Sequelize.NUMBER
      },
      J: {
        type: Sequelize.NUMBER
      },
      V: {
        type: Sequelize.NUMBER
      },
      E: {
        type: Sequelize.STRING
      },
      D: {
        type: Sequelize.STRING
      },
      GP: {
        type: Sequelize.NUMBER
      },
      GC: {
        type: Sequelize.NUMBER
      },
      SG: {
        type: Sequelize.NUMBER
      },
      amarelos: {
        type: Sequelize.NUMBER
      },
      vermelhos: {
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