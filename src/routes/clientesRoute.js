const { Router } = require('express')
const ClienteController = require('../controllers/ClienteController.js')

const clienteController = new ClienteController()

const router = Router()

router.get('/clientes', (req, res) => clienteController.pegaTodos(req, res))
router.get('/clientes/:id', (req, res) => clienteController.pegaPorId(req, res))
router.post('/clientes', (req, res) => clienteController.novo(req, res))
router.put('/clientes/:id', (req, res) => clienteController.alterar(req, res))
router.delete('/clientes/:id', (req, res) => clienteController.excluir(req, res))

module.exports = router