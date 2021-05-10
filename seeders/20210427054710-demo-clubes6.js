'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Clubes6s',[{
      name: 'América de Cali',
      urlShield: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Escudo_de_Am%C3%A9rica_de_Cali.png',
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
      name: 'Chivas',
      urlShield: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Guadalajara_CD.svg/1200px-Guadalajara_CD.svg.png',
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
      urlShield: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Escudo_del_Deportivo_Independiente_Medell%C3%ADn.png',
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
      urlShield: 'https://escudo.biz/wp-content/uploads/2018/11/flamengo-escudo-4.png',
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
      urlShield: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Escudo_de_Independiente_Santa_Fe.png',
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
