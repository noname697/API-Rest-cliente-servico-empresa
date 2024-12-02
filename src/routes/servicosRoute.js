const { Router } = require('express')
const ServicoController = require('../controllers/ServicoController.js')

const servicoController = new ServicoController()

const router = Router()

router.get('/servicos', (req, res) => servicoController.pegaTodos(req, res))
router.get('/servicos/:id', (req, res) => servicoController.pegaPorId(req, res))
router.post('/servicos', (req, res) => servicoController.novo(req, res))
router.put('/servicos/:id', (req, res) => servicoController.alterar(req, res))
router.delete('/servicos/:id', (req, res) => servicoController.excluir(req, res))

module.exports = router