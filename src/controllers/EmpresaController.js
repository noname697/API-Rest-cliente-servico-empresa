const Controller = require('./Controller.js')
const EmpresaServices = require('../services/EmpresaServices.js')

const empresasServices = new EmpresaServices()

class EmpresaController extends Controller {
    constructor() {
        super(empresasServices)
    }
}


module.exports = EmpresaController