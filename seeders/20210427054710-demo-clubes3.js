'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Clubes3s',[{
      name: 'Bayern Múnich',
      urlShield: 'https://3.bp.blogspot.com/-gunJY3CHi9E/WVDEnsgA7rI/AAAAAAABJzs/oJrbBdyKUToGoBS42ikY6YkWAFTqEGwZgCLcBGAs/s1600/FC%2BBayern%2BMunchen.png',
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
      urlShield: 'https://1.bp.blogspot.com/-G27DTvdHHRc/X78Fl0DZLWI/AAAAAAABhXQ/G-_dTZNoWGgZellZ1Q9-6eXVakSQ05tjgCLcBGAsYHQ/s512/Club%2BAtletico%2BPenarol.png',
      country: 'Uruguai',
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
      name: 'Alianza Lima',
      urlShield: 'https://logodetimes.com/times/alianza-lima/logo-alianza-lima-512.png',
      country: 'Perú',
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
      urlShield: 'https://logodownload.org/wp-content/uploads/2017/02/inter-milan-logo-1.png',
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
      name: 'Brentford',
      urlShield: 'https://upload.wikimedia.org/wikipedia/pt/5/5a/Brentford_FC.png',
      country: 'Inglaterra',
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
      name: 'Atl. de Madrid',
      urlShield: 'https://i.pinimg.com/originals/b9/43/5f/b9435f157a6a9a6ed4e73479fec554f2.png',
      country: 'Espanha',
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
      name: 'Cerezo Osaka',
      urlShield: 'https://i.pinimg.com/originals/89/fc/36/89fc36ec96c7398ea26e5c1ed6ed8b64.png',
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
      urlShield: 'https://i.pinimg.com/originals/d6/92/fb/d692fb3d4b56f3397924bc980bdd9a15.png',
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
