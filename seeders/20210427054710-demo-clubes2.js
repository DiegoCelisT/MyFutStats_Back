'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Clubes2s',[{
      name: 'Grêmio',
      urlShield: 'https://i.postimg.cc/jjGP4vsK/Gr-mio.png',
      country: 'Brasil',
      pontos: 10,
      jogados: 5,
      vitorias: 3,
      empates: 1,
      derrotas: 1,
      golsPro: 20,
      golsContra: 14,
      saldoGols: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'River Plate',
      urlShield: 'https://i.postimg.cc/GhrPfMvm/River.png',
      country: 'Argentina',
      pontos: 6,
      jogados: 5,
      vitorias: 1,
      empates: 3,
      derrotas: 1,
      golsPro: 7,
      golsContra: 14,
      saldoGols: -7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'PSG',
      urlShield: 'https://i.postimg.cc/T1jVwmvx/PSG.png',
      country: 'França',
      pontos: 6,
      jogados: 5,
      vitorias: 1,
      empates: 3,
      derrotas: 1,
      golsPro: 22,
      golsContra: 24,
      saldoGols: -2,
      createdAt: new Date(),
      updatedAt: new Date()
    
    },{
      name: 'Chelsea',
      urlShield: 'https://i.postimg.cc/kggQJB1r/Chelsea.png',
      country: 'Inglaterra',
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
      name: 'Sinisters',
      urlShield: 'https://i.postimg.cc/fygV6mc2/Sinisters-e-Sports.png',
      country: 'Argentina',
      pontos: 9,
      jogados: 5,
      vitorias: 2,
      empates: 3,
      derrotas: 0,
      golsPro: 19,
      golsContra: 18,
      saldoGols: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'AC Milan',
      urlShield: 'https://i.postimg.cc/YSVfyMz5/AC-Milan.png',
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
      name: 'Miami',
      urlShield: 'https://i.postimg.cc/zG2nV86y/Miami.png',
      country: 'USA',
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
      name: 'Lokomotiv',
      urlShield: 'https://i.postimg.cc/rmrGB3hK/Lokomotiv.png',
      country: 'Rússia',
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
