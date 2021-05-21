'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Clubes5s',[{
      name: 'Babilio',
      urlShield: 'https://i.postimg.cc/d1Fn1k7t/Babilio-Gaming.png',
      country: 'Colômbia',
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
      name: 'Napoli',
      urlShield: 'https://i.postimg.cc/c19hvpjt/Napoli.png',
      country: 'Italia',
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
      name: 'Sevilla',
      urlShield: 'https://i.postimg.cc/50p3qT2G/Sevilla.png',
      country: 'Espanha',
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
      name: 'Envigado',
      urlShield: 'https://i.postimg.cc/fbc5kJnM/Envigado.png',
      country: 'Colômbia',
      pontos: 10,
      jogados: 6,
      vitorias: 3,
      empates: 1,
      derrotas: 2,
      golsPro: 24,
      golsContra: 12,
      saldoGols: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Fluminense',
      urlShield: 'https://i.postimg.cc/HxTzMddX/Fluminense.png',
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
      name: 'Olimpia',
      urlShield: 'https://i.postimg.cc/YqTx31tp/Olimpia.png',
      country: 'Paraguai',
      pontos: 5,
      jogados: 5,
      vitorias: 1,
      empates: 2,
      derrotas: 2,
      golsPro: 11,
      golsContra: 18,
      saldoGols: -7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Accra',
      urlShield: 'https://i.postimg.cc/4yd18PK3/Accra.png',
      country: 'Ghana',
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
    },{
      name: 'Caracas FC',
      urlShield: 'https://i.postimg.cc/ht72W22z/Caracas.png',
      country: 'Venezuela',
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
