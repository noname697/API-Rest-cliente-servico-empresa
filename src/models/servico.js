'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servico extends Model {
    static associate(models) {
      Servico.hasOne(models.Empresa, {
        foreignKey: 'empresa_id'
      })
    }
  }
  Servico.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.FLOAT
  }, {
    sequelize,
    tableName: 'servicos',
    modelName: 'Servico',
  });
  return Servico;
};