const db = require('../models')

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel
    }

    async pegaTodosOsRegistros() {
        return db[this.model].findAll()
    }

    async pegaRegistroPorId(req, res) {
        return db[this.model].findByPk(req.params.id);
    }

    async novoRegistro(req, res) {
        return db[this.model].create(req.body);
    }

    async alterarRegistro(req, res) {
        const registro = await db[this.model].findByPk(req.params.id);
        return registro.update(req.body)
    }

    async excluirRegistro(req, res) {
        return db[this.model].destroy({ where: { id: req.params.id } })
    }
}


module.exports = Services