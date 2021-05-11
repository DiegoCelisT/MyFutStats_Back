'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Clubes4s',[{
      name: 'Orlando Pirates',
      urlShield: 'https://i.pinimg.com/originals/1a/3b/e0/1a3be025ef2da146a718c1ea1144a520.png',
      country: 'USA',
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
      name: 'Pyramids',
      urlShield: 'https://4.bp.blogspot.com/-xKPqwHaUZ7M/Wzagt5SsJnI/AAAAAAAA5yA/sIhNdgnrCr005LnzvFDrwoKIEUd05BnsACLcBGAs/s1600/PIRAMIDS%2BFC-EGI.png',
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
      name: 'Leicester',
      urlShield: 'https://upload.wikimedia.org/wikipedia/pt/0/0e/LeicesterCity_logo2014.png',
      country: 'Inglaterra',
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
      name: 'AS Roma',
      urlShield: 'https://1.bp.blogspot.com/-fWlZhUcsxeY/XX2g4nj9DII/AAAAAAABV_k/omYH3ZAvbGYWkYe6g1DnZjB5R7yf6CmsQCLcBGAsYHQ/s1600/AS%2BRoma.png',
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
      urlShield: 'https://4.bp.blogspot.com/--xAP0FKSNKM/WVkuta4oXyI/AAAAAAABLN8/1hIcCnb8bZcPEbYYCb0WrALVspOvdIOsACLcBGAs/s1600/PFC%2BCSKA%2BMoscow.png',
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
      urlShield: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Escudo_del_Club_Atl%C3%A9tico_San_Lorenzo_de_Almagro.png',
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
      urlShield: 'https://logodownload.org/wp-content/uploads/2015/05/Barcelona-logo-escudo.png',
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
      urlShield: 'https://i1.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/2016/11/escudo-Corinthians.png?fit=512%2C512&ssl=1',
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
