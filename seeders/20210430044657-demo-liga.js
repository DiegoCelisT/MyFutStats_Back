'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Ligas', [{
      name: 'Champions Toter',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
      },{
      name: 'Super Duper',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
      },{
      name: 'Gringos League',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
      },{
      name: 'Premier Champs',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()    
      }
    ]);
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
