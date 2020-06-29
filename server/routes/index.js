const express = require('express');

const router = express.Router();

const experienciasController = require('../controllers/experienciasController')
const nosotrosController = require('../controllers/nostrosController');
const homePageController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController')

module.exports = function(){
    router.get('/', homePageController.consultasHomePage);
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes/:id', viajesController.viajesControllerById);
    router.get('/viajes', viajesController.viajesControllerAll);
    router.get('/testimoniales', experienciasController.expererienciasController);
    router.post('/testimoniales', experienciasController.experienciasPOST);

    return router;
}