'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Clubes3s',[{
      name: 'Bayern Múnich',
      urlShield: 'https://i.postimg.cc/zvLwrBqw/FC-Bayern-Munchen.png',
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
      name: 'Peñarol',
      urlShield: 'https://i.postimg.cc/GpQxPVMD/Pe-arol.png',
      country: 'Uruguai',
      pontos: 6,
      jogados: 5,
      vitorias: 1,
      empates: 3,
      derrotas: 1,
      golsPro: 20,
      golsContra: 18,
      saldoGols: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    
    },{
      name: 'Furious',
      urlShield: 'https://i.postimg.cc/L8yxx60x/Furious-Gaming.png',
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
      name: 'Inter de Milán',
      urlShield: 'https://i.postimg.cc/sxtYDr2k/Inter-de-Mil-n.png',
      country: 'Italia',
      pontos: 9,
      jogados: 5,
      vitorias: 2,
      empates: 3,
      derrotas: 0,
      golsPro: 19,
      golsContra: 15,
      saldoGols: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Brentford',
      urlShield: 'https://i.postimg.cc/j536mNYd/Brentford-FC.png',
      country: 'Inglaterra',
      pontos: 11,
      jogados: 6,
      vitorias: 3,
      empates: 2,
      derrotas: 1,
      golsPro: 25,
      golsContra: 17,
      saldoGols: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Atl. de Madrid',
      urlShield: 'https://i.postimg.cc/ncDKSCRp/Atl-tico-de-Madrid.png',
      country: 'Espanha',
      pontos: 2,
      jogados: 5,
      vitorias: 0,
      empates: 2,
      derrotas: 3,
      golsPro: 14,
      golsContra: 17,
      saldoGols: -3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Cerezo Osaka',
      urlShield: 'https://i.postimg.cc/bJwHmgMB/Cerezo-Osaka.png',
      country: 'Japão',
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
      name: 'Kaizer Chiefs',
      urlShield: 'https://i.postimg.cc/SQ57GWGg/Kaizer-Chiefs.png',
      country: 'África do Sul',
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
