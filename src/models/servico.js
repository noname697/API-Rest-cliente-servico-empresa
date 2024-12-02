'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servico extends Model {
    static associate(models) {
      Servico.belongsTo(models.Empresa, {
        foreignKey: 'empresa_id',
        as: 'empresa'
      })
    }
  }
  Servico.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    empresa_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'servicos',
    modelName: 'Servico',
  });
  return Servico;
};