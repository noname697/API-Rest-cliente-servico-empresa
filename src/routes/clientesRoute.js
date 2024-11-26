const { Router } = require('express')
const ClienteController = require('../controllers/ClientesController.js')

const router = Router()

router.get('/clientes', (req, res) => ClienteController.pegaTudo(req, res))
router.get('/clientes/:id', (req, res) => ClienteController.pegaClientePorId(req, res))
router.post('/clientes', (req, res) => ClienteController.novoCliente(req, res))
router.put('/clientes/:id', (req, res) => ClienteController.alterarCliente(req, res))
router.delete('/clientes/:id', (req, res) => ClienteController.excluirCliente(req, res))

module.exports = router