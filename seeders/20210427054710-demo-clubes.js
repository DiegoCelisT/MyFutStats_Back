'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Clubes',[{
      name: 'Manchester United',
      urlShield: 'https://i.postimg.cc/DZNBq7Rp/Manchester-United.png',
      country: 'Inglaterra',
      pontos: 12,
      jogados: 4,
      vitorias: 4,
      empates: 0,
      derrotas: 0,
      golsPro: 22,
      golsContra: 14,
      saldoGols: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Real Madrid',
      urlShield: 'https://i.postimg.cc/0Nbtr6BK/Real-Madrid.png',
      country: 'Espanha',
      pontos: 12,
      jogados: 5,
      vitorias: 4,
      empates: 0,
      derrotas: 1,
      golsPro: 20,
      golsContra: 14,
      saldoGols: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Borussia Dortmund',
      urlShield: 'https://i.postimg.cc/523c8FgP/Borussia-Dortmund.png',
      country: 'Alemanha',
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
      name: 'Boca Juniors',
      urlShield: 'https://i.postimg.cc/FHXCWsz2/Boca-Juniors.png',
      country: 'Argentina',
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
      name: 'Chivas',
      urlShield: 'https://i.postimg.cc/ZRNVFGZT/Chivas-Rayadas.png',
      country: 'México',
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
      name: 'Ind. Medellín',
      urlShield: 'https://i.postimg.cc/3JvbFD8X/Independiente-Medell-n.png',
      country: 'Colômbia',
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
      name: 'Flamengo',
      urlShield: 'https://i.postimg.cc/SRsbKQCZ/Flamengo.pngg',
      country: 'Brasil',
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
      name: 'Santa Fé',
      urlShield: 'https://i.postimg.cc/RCbjRBcB/Santa-F.png',
      country: 'Colômbia',
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
