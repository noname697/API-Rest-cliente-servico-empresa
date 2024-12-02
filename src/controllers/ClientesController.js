const Controller = require('./Controller.js')
const ClienteServices = require('../services/ClienteServices.js')

const clientesServices = new ClienteServices()

class ClienteController extends Controller {
    constructor() {
        super(clientesServices)
    }
}


module.exports = ClienteController