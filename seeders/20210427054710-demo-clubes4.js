'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Clubes4s',[{
      name: 'Red Foxes',
      urlShield: 'https://i.postimg.cc/MGx6FCmv/Red-Foxes.png',
      country: 'Uruguai',
      pontos: 14,
      jogados: 6,
      vitorias: 4,
      empates: 2,
      derrotas: 0,
      golsPro: 22,
      golsContra: 10,
      saldoGols: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    
    },{
      name: 'Pyramids',
      urlShield: 'https://i.postimg.cc/mrC20Gxc/Pyramids.png',
      country: 'Egito',
      pontos: 9,
      jogados: 5,
      vitorias: 2,
      empates: 3,
      derrotas: 0,
      golsPro: 16,
      golsContra: 6,
      saldoGols: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Coliseo Dragons',
      urlShield: 'https://i.postimg.cc/zGRjKc3v/Coliseo-Dragons.png',
      country: 'Argentina',
      pontos: 7,
      jogados: 5,
      vitorias: 2,
      empates: 1,
      derrotas: 2,
      golsPro: 19,
      golsContra: 18,
      saldoGols: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'AS Roma',
      urlShield: 'https://i.postimg.cc/90JfJP6J/AS-Roma.png',
      country: 'Italia',
      pontos: 3,
      jogados: 4,
      vitorias: 0,
      empates: 3,
      derrotas: 1,
      golsPro: 5,
      golsContra: 17,
      saldoGols: -12,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'CSKA Moscow',
      urlShield: 'https://i.postimg.cc/WpntNjdg/CSKA-Moscow.png',
      country: 'Rússia',
      pontos: 6,
      jogados: 4,
      vitorias: 2,
      empates: 0,
      derrotas: 2,
      golsPro: 14,
      golsContra: 17,
      saldoGols: -3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'San Lorenzo',
      urlShield: 'https://i.postimg.cc/ZRLY5F54/San-Lorenzo.png',
      country: 'Argentina',
      pontos: 6,
      jogados: 4,
      vitorias: 1,
      empates: 3,
      derrotas: 0,
      golsPro: 15,
      golsContra: 5,
      saldoGols: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Barcelona',
      urlShield: 'https://i.postimg.cc/Vk3kGkhQ/Barcelona.png',
      country: 'Espanha',
      pontos: 1,
      jogados: 5,
      vitorias: 0,
      empates: 1,
      derrotas: 4,
      golsPro: 11,
      golsContra: 22,
      saldoGols: -11,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Corinthians',
      urlShield: 'https://i.postimg.cc/Ghg2DQJp/Corinthians.png',
      country: 'Brasil',
      pontos: 10,
      jogados: 5,
      vitorias: 3,
      empates: 1,
      derrotas: 1,
      golsPro: 11,
      golsContra: 8,
      saldoGols: 3,
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
