const {Router} = require('express')

const router = Router()

router.get('/clientes', (req, res) => res.json({message: "ola mundo"}))

module.exports = router