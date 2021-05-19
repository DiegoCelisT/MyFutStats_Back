'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Clubes6s',[{
      name: 'Llaneros FC',
      urlShield: 'https://i.postimg.cc/ZqVfy93q/Llaneros-FC.png',
      country: 'Colômbia',
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
      name: 'Junior',
      urlShield: 'https://i.postimg.cc/x8nvk2Dh/Junior.png',
      country: 'Colômbia',
      pontos: 3,
      jogados: 4,
      vitorias: 0,
      empates: 3,
      derrotas: 1,
      golsPro: 15,
      golsContra: 17,
      saldoGols: -2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Club Brugge',
      urlShield: 'https://i.postimg.cc/zf3FQq3t/Club-Brugge.png',
      country: 'Bélgica',
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
      name: 'Monaco',
      urlShield: 'https://i.postimg.cc/50cqVzPx/Monaco.png',
      country: 'França',
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
      name: 'Colo Colo',
      urlShield: 'https://i.postimg.cc/MpFm9NVf/Colo-Colo.png',
      country: 'Chile',
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
      name: 'Parma',
      urlShield: 'https://i.postimg.cc/zXDw88kR/Parma.png',
      country: 'Italia',
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
      name: 'Atalanta',
      urlShield: 'https://i.postimg.cc/ncn2rvnr/Atalanta.png',
      country: 'Italia',
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
      name: 'DC United',
      urlShield: 'https://i.postimg.cc/hGmTpjKN/DC-United.png',
      country: 'USA',
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
