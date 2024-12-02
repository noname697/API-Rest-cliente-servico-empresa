'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('servicos', [
      {
        nome: 'Consultoria de TI',
        descricao: 'Serviço de consultoria para otimização de infraestrutura de TI.',
        preco: 150.0,
        empresa_id: 1, // Referência ao ID de uma empresa existente
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Desenvolvimento Web',
        descricao: 'Desenvolvimento de websites personalizados.',
        preco: 500.0,
        empresa_id: 2, // Referência ao ID de uma empresa existente
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Suporte Técnico',
        descricao: 'Suporte para resolução de problemas técnicos em equipamentos de informática.',
        preco: 80.0,
        empresa_id: 1, // Referência ao ID de uma empresa existente
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('servicos', null, {});

  }
};
