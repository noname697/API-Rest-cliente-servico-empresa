const express = require('express')
const clientes = require('./clientesRoute.js')
const empresas = require('./empresasRoute.js')
const servicos = require("./servicosRoute.js")


module.exports = app => {
    app.use(
        express.json(),
        clientes,
        empresas,
        servicos
    )
}