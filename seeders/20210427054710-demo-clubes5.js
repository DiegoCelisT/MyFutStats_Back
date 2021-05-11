'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Clubes5s',[{
      name: 'Wolfsburgo',
      urlShield: 'https://i.pinimg.com/originals/dd/dc/45/dddc45e2912361288c6b4476a97270d1.png',
      country: 'Alemanha',
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
      urlShield: 'https://logodownload.org/wp-content/uploads/2017/11/napoli-logo-escudo-1.png',
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
      urlShield: 'https://4.bp.blogspot.com/-xWxHoCVUdqI/WVQRr_ZxEvI/AAAAAAABKQ8/KjRTikRIMt83heP-3Vi9FIegrzmoZlSVgCLcBGAs/s1600/Sevilla%2BFC.png',
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
      urlShield: 'https://1.bp.blogspot.com/-f26u0pGWqT4/X59l4iHeu3I/AAAAAAABhOM/H9b5RKz8RNUK610J5ObSQXii6WDoCI2-ACLcBGAsYHQ/s512/Envigado%2BFC.png',
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
      urlShield: 'https://upload.wikimedia.org/wikipedia/pt/b/b1/FluminenseFCBA.png',
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
      urlShield: 'https://logodownload.org/wp-content/uploads/2019/04/olimpia-logo-escudo.png',
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
      urlShield: 'https://www.escudosfc.com.br/images/heartsofoak.png',
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
      urlShield: 'https://www.latingoles.com/wp-content/uploads/2019/02/caracas.png',
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
