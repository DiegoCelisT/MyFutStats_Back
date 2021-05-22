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
      pontos: 1,
      jogados: 5,
      vitorias: 0,
      empates: 1,
      derrotas: 4,
      golsPro: 15,
      golsContra: 25,
      saldoGols: -10,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'PSG',
      urlShield: 'https://i.postimg.cc/T1jVwmvx/PSG.png',
      country: 'França',
      pontos: 4,
      jogados: 5,
      vitorias: 1,
      empates: 1,
      derrotas: 3,
      golsPro: 14,
      golsContra: 22,
      saldoGols: -8,
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
      pontos: 7,
      jogados: 4,
      vitorias: 2,
      empates: 1,
      derrotas: 1,
      golsPro: 18,
      golsContra: 18,
      saldoGols: 0,
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
      golsPro: 20,
      golsContra: 14,
      saldoGols: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Lokomotiv',
      urlShield: 'https://i.postimg.cc/rmrGB3hK/Lokomotiv.png',
      country: 'Rússia',
      pontos: 5,
      jogados: 4,
      vitorias: 1,
      empates: 2,
      derrotas: 1,
      golsPro: 15,
      golsContra: 11,
      saldoGols: 4,
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
