const Controller = require('./Controller.js')
const ServicoServices = require('../services/ServicoServices.js')

const servicosServices = new ServicoServices()

class ServicoController extends Controller {
    constructor() {
        super(servicosServices)
    }
}


module.exports = ServicoController