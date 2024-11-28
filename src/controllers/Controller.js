const { Sequelize, where } = require('sequelize');


class Controller{
    constructor(tabela){
        this.tabela = tabela
    }

    static async pegaTudo(req, res) {
        try {
            const dados = await this.tabela.findAll();
            return res.status(200).json(dados)
        } catch (erro) {
            return res.status(500).send(erro)
        }
    }

    static async pegaPorId(req, res) {
        try {
            const dados = await this.tabela.findByPk(req.params.id);
            if (dados === null) {
                return res.status(404).json({ mensagem: "Não encontrado" });
            }
            return res.status(200).json(dados);
        } catch (erro) {
            return res.status(500).send(erro);
        }
    }

    static async novo(req, res) {
        try {
            const { nome, email, senha } = req.body;
            const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

            if (!nome || !email || !senha) {
                return res.status(400).json({ mensagem: 'Campos obrigatórios faltando: nome, email, telefone, endereco.' });
            } else if (!emailRegex.test(email)) {
                return res.status(400).json({ mensagem: 'Email inválido.' });
            }

            const novo = await this.tabela.create(req.body);
            return res.status(201).json({ mensagem: `Novo ${this.tabela} cadastrado de ID: ${novo.id}.` });

        } catch (erro) {
            console.error(erro);
            return res.status(500).send({ mensagem: 'Erro interno do servidor.' });
        }
    }

    static async alterar(req, res) {
        try {
            const { nome, email, senha } = req.body;
            const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

            if (!nome || !email || !senha) {
                return res.status(400).json({ mensagem: 'Campos obrigatórios faltando: nome, email, telefone, endereco.' });
            } else if (!emailRegex.test(email)) {
                return res.status(400).json({ mensagem: 'Email inválido.' });
            }

            const alterar = await this.tabela.findByPk(req.params.id);
            await alterar.update(req.body)
            res.status(200).json({ message: `${this.tabela} modificado com sucesso!` })

        } catch (erro) {
            return res.status(500).send(erro)
        }
    }

    static async excluir(req, res) {
        try {
            const id = req.params.id
            await this.tabela.destroy({
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