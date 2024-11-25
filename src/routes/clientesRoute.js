const { Router } = require('express')
const ClienteController = require('../controllers/ClientesController.js')

const router = Router()

router.get('/clientes', (req, res) => ClienteController.pegaTudo(req, res))

module.exports = router