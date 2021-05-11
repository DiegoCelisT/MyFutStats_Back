'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Clubes6s',[{
      name: 'Atl. Bucaramanga',
      urlShield: 'https://i.pinimg.com/originals/4f/57/73/4f57734a5f27c733b3b6b07203db6c3b.png',
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
      urlShield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Escudo_de_Atl%C3%A9tico_Junior.svg/1200px-Escudo_de_Atl%C3%A9tico_Junior.svg.png',
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
      name: 'Juventus',
      urlShield: 'https://1.bp.blogspot.com/-z-1dFgKggQw/XyS3T31eReI/AAAAAAABfhQ/daiaiT5bR4UX_QtcDe6Ky2mE9-YUIDeLgCLcBGAsYHQ/s512/Juventus%2BFC.png',
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
      name: 'Monaco',
      urlShield: 'https://2.bp.blogspot.com/-eaIJVpOZ93o/WVVz4c1jtdI/AAAAAAABKn8/BuvfOWOuOzUwtzipw2177XGLDMO2Efg0gCLcBGAs/s1600/AS%2BMonaco%2BFC.png',
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
      urlShield: 'https://logodownload.org/wp-content/uploads/2017/02/colo-colo-logo-escudo-5.png',
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
      urlShield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_Parma_Calcio_1913_%28adozione_2016%29.svg/1200px-Logo_Parma_Calcio_1913_%28adozione_2016%29.svg.png',
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
      urlShield: 'https://3.bp.blogspot.com/-32Kmx8Cgl74/WPb4dP8sxYI/AAAAAAAAQWs/ZQygRKkcMAkBEPWvcoSdryK4yX6DHSsiwCLcB/s1600/Atalanta%2B1.png',
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
      urlShield: 'https://logodownload.org/wp-content/uploads/2020/10/dc-united-logo-1.png',
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
