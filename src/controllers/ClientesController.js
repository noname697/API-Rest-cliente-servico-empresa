const { Sequelize } = require('sequelize');
const {Cliente} = require('../models')


class ClienteController {
    static async pegaTudo(req, res) {
        try {
            const dados = await Cliente.findAll();
            return res.status(200).json(dados)
        } catch (erro) {
            return res.status(500).send(erro)
        }
    }
}

module.exports = ClienteController