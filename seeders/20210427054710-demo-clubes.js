'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Clubes',[{
      name: 'Manchester United',
      urlShield: 'https://upload.wikimedia.org/wikipedia/pt/b/b6/Manchester_United_FC_logo.png',
      country: 'Inglaterra',
      // pontos: 10,
      // jogados: 4,
      vitorias: 3,
      empates: 1,
      derrotas: 0,
      golsPro: 12,
      golsContra: 4,
      // saldoGols: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Real Madrid',
      urlShield: 'https://i.pinimg.com/originals/bb/8f/99/bb8f9956d1892f6ac5fd5c6650fbc218.png',
      country: 'Espanha',
      // pontos: 10,
      // jogados: 4,
      vitorias: 4,
      empates: 0,
      derrotas: 1,
      golsPro: 22,
      golsContra: 14,
      // saldoGols: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Borussia Dortmund',
      urlShield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png',
      country: 'Alemanha',
      // pontos: 10,
      // jogados: 4,
      vitorias: 1,
      empates: 3,
      derrotas: 1,
      golsPro: 7,
      golsContra: 14,
      // saldoGols: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'PSG',
      urlShield: 'https://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F160.png',
      country: 'França',
      // pontos: 10,
      // jogados: 4,
      vitorias: 2,
      empates: 2,
      derrotas: 1,
      golsPro: 22,
      golsContra: 24,
      // saldoGols: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    
  },{
    name: 'Boca Juniors',
    urlShield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Boca_Juniors_logo18.svg/1200px-Boca_Juniors_logo18.svg.png',
    country: 'Argentina',
    // pontos: 10,
      // jogados: 4,
      vitorias: 2,
      empates: 3,
      derrotas: 0,
      golsPro: 12,
      golsContra: 17,
      // saldoGols: 8,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
  name: 'América de Cali',
  urlShield: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Escudo_de_Am%C3%A9rica_de_Cali.png',
  country: 'Colômbia',
  // pontos: 10,
      // jogados: 4,
      vitorias: 2,
      empates: 1,
      derrotas: 1,
      golsPro: 9,
      golsContra: 14,
      // saldoGols: 8,
  createdAt: new Date(),
  updatedAt: new Date()
},{
  name: 'Chivas',
  urlShield: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Guadalajara_CD.svg/1200px-Guadalajara_CD.svg.png',
  country: 'México',
  // pontos: 10,
      // jogados: 4,
      vitorias: 0,
      empates: 3,
      derrotas: 1,
      golsPro: 5,
      golsContra: 17,
      // saldoGols: 8,
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
