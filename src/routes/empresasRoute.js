const { Router } = require('express')
const EmpresaController = require('../controllers/EmpresaController.js')

const empresaController = new EmpresaController()

const router = Router()

router.get('/empresas', (req, res) => empresaController.pegaTodos(req, res))
router.get('/empresas/:id', (req, res) => empresaController.pegaPorId(req, res))
router.post('/empresas', (req, res) => empresaController.novo(req, res))
router.put('/empresas/:id', (req, res) => empresaController.alterar(req, res))
router.delete('/empresas/:id', (req, res) => empresaController.excluir(req, res))

module.exports = router