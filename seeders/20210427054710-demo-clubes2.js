'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Clubes2s',[{
      name: 'Grêmio',
      urlShield: 'https://logodownload.org/wp-content/uploads/2017/02/gremio-logo-escudo.png',
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
      urlShield: 'https://imagensemoldes.com.br/wp-content/uploads/2020/03/Futebom-Escudo-River-Plate-PNG.png',
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
      urlShield: 'https://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F160.png',
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
      urlShield: 'https://logodownload.org/wp-content/uploads/2017/02/chelsea-fc-logo-2.png',
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
      name: 'AC Milan',
      urlShield: 'https://i.pinimg.com/originals/71/23/02/712302009427d546b13569aa7eeb8d6b.png',
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
      urlShield: 'https://logodownload.org/wp-content/uploads/2020/11/Inter-miami-cf-logo-1.png',
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
      urlShield: 'https://www.futbox.com/img/v1/566/5ca/c1f/9cc/e75d036b9624332aae5e_zoom.png',
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
