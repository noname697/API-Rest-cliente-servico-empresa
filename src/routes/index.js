const express = require('express')
const clientes = require('./clientesRoute.js')
const empresas = require('./empresasRoute.js')


module.exports = app => {
    app.use(
        express.json(),
        clientes,
        empresas
    )
}