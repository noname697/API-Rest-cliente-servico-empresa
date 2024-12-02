'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('empresas', [
      {
        nome: 'Empresa A',
        email: 'contato@empresaA.com',
        senha: 'senha123',
        telefone: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Empresa B',
        email: 'contato@empresaB.com',
        senha: 'senha123',
        telefone: '0987654321',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        nome: 'Empresa C',
        email: 'contato@empresaC.com',
        senha: 'senha123',
        telefone: '1122334455',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('empresas', null, {});
  }
};
