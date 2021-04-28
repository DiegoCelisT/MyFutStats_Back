'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Clubes',[{
      name: 'Manchester United',
      urlShield: 'https://upload.wikimedia.org/wikipedia/pt/b/b6/Manchester_United_FC_logo.png',
      country: 'Inglaterra',
      position: 1,
      pts: 10,
      J: 4,
      V: 3,
      E: 1,
      D: 0,
      GP: 12,
      GC: 4,
      SG: 8,
      YC: 3,
      RC: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Real Madrid',
      urlShield: 'https://i.pinimg.com/originals/bb/8f/99/bb8f9956d1892f6ac5fd5c6650fbc218.png',
      country: 'Espanha',
      position: 2,
      pts: 9,
      J: 4,
      V: 3,
      E: 1,
      D: 0,
      GP: 14,
      GC: 5,
      SG: 9,
      YC: 2,
      RC: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Borussia Dortmund',
      urlShield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png',
      country: 'Alemanha',
      position: 3,
      pts: 4,
      J: 4,
      V: 1,
      E: 1,
      D: 2,
      GP: 6,
      GC: 6,
      SG: 0,
      YC: 1,
      RC: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'PSG',
      urlShield: 'https://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F160.png',
      country: 'França',
      position: 4,
      pts: 1,
      J: 4,
      V: 0,
      E: 1,
      D: 3,
      GP: 5,
      GC: 9,
      SG: -4,
      YC: 2,
      RC: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    
  }]);

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
