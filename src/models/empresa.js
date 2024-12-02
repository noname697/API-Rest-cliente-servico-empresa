'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    static associate(models) {
      Empresa.hasMany(models.Servico,{
        foreignKey: 'empresa_id',
        as: 'servicos'
      })
    }
  }
  Empresa.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    telefone: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'empresas',
    modelName: 'Empresa',
  });
  return Empresa;
};