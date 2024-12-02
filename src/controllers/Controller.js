class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService
    }

    async pegaTodos(req, res) {
        try {
            const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistros)
        } catch (erro) {
            return res.status(500).send(erro)
        }
    }

    async pegaPorId(req, res) {
        try {
            const listaDeRegistros = await this.entidadeService.pegaRegistroPorId(req, res);
            if (listaDeRegistros === null) {
                return res.status(404).json({ mensagem: "Não encontrado" });
            }
            return res.status(200).json(listaDeRegistros);
        } catch (erro) {
            return res.status(500).send(erro);
        }
    }

    async novo(req, res) {
        try {
            const registroNovo = await this.entidadeService.novoRegistro(req, res);
            return res.status(201).json({ mensagem: `Novo registro cadastrado de ID: ${registroNovo.id}.` });
        } catch (erro) {
            console.error(erro);
            return res.status(500).send({ mensagem: 'Erro interno do servidor.' });
        }
    }

    async alterar(req, res) {
        try {
            const registro = await this.entidadeService.alterarRegistro(req, res);
            res.status(200).json({ message: "Registro modificado com sucesso!" })
        } catch (erro) {
            return res.status(500).send(erro)
        }
    }

    async excluir(req, res) {
        try {
            const id = req.params.id
            await this.entidadeService.excluirRegistro(req, res)
            return res.status(200).json({ mensagem: `Registro de ID: ${id} foi deletado com sucesso!` })
        } catch (erro) {
            return res.status(500).send(erro)
        }
    }
}

module.exports = Controller