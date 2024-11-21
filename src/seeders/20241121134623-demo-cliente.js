'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [
      { nome: 'João Silva', email: 'joao@exemplo.com', senha: 'senha123', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Maria Oliveira', email: 'maria@exemplo.com', senha: 'senha456', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Carlos Souza', email: 'carlos@exemplo.com', senha: 'senha789', createdAt: new Date(), updatedAt: new Date() },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};
