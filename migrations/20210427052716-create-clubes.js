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
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      position: {
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
        type: Sequelize.NUMBER
      },
      D: {
        type: Sequelize.NUMBER
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
      YC: {
        type: Sequelize.NUMBER
      },
      RC: {
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