const { Sequelize, where } = require('sequelize');
const { Cliente } = require('../models')


class ClienteController {
    static async pegaTudo(req, res) {
        try {
            const dados = await Cliente.findAll();
            return res.status(200).json(dados)
        } catch (erro) {
            return res.status(500).send(erro)
        }
    }

    static async pegaClientePorId(req, res) {
        try {
            const dados = await Cliente.findByPk(req.params.id);
            if (dados === null) {
                return res.status(404).json({ mensagem: "Cliente não encontrado" });
            }
            return res.status(200).json(dados);
        } catch (erro) {
            return res.status(500).send(erro);
        }
    }

    static async novoCliente(req, res) {
        try {
            const { nome, email, senha } = req.body;
            const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

            if (!nome || !email || !senha) {
                return res.status(400).json({ mensagem: 'Campos obrigatórios faltando: nome, email, telefone, endereco.' });
            } else if (!emailRegex.test(email)) {
                return res.status(400).json({ mensagem: 'Email inválido.' });
            }

            const clienteNovo = await Cliente.create(req.body);
            return res.status(201).json({ mensagem: `Novo cliente cadastrado de ID: ${clienteNovo.id}.` });

        } catch (erro) {
            console.error(erro);
            return res.status(500).send({ mensagem: 'Erro interno do servidor.' });
        }
    }

    static async alterarCliente(req, res) {
        try {
            const { nome, email, senha } = req.body;
            const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

            if (!nome || !email || !senha) {
                return res.status(400).json({ mensagem: 'Campos obrigatórios faltando: nome, email, telefone, endereco.' });
            } else if (!emailRegex.test(email)) {
                return res.status(400).json({ mensagem: 'Email inválido.' });
            }

            const cliente = await Cliente.findByPk(req.params.id);
            await cliente.update(req.body)
            res.status(200).json({ message: "Cliente modificado com sucesso!" })

        } catch (erro) {
            return res.status(500).send(erro)
        }
    }

    static async excluirCliente(req, res) {
        try {
            const id = req.params.id
            await Cliente.destroy({
                where: {
                    id: id
                }
            })
            return res.status(200).json({ mensagem: `Usuário de ID: ${id} foi deletado com sucesso!` })
        } catch (erro) {
            return res.status(500).send(erro)
        }
    }
}


module.exports = ClienteController