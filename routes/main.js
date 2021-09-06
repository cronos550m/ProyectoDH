/*controlador encargado de todas las rutas pertenecientes al main*/

const express = require('express'); // requiero express para trabajar con el modulo router
const router = express.Router(); // asigno el modulo router a la constante router
const mainController = require ('../controllers/mainController.js'); /*requiero el controlador main (este contiene todas las rutas referidas al main)
                                                                    ..para salir de la carpeta*/


router.get('/', mainController.home); // al acceder al home llamo al controlador en el metodo home
router.get('/loader', mainController.loader);// al acceder al loader llamo al controlador en el metodo loader
router.get('/productDetail', mainController.productDetail);// al acceder al detalle de producto llamo al controlador en el metodo productDetail
// ^═pasar al routes de producto
router.get('/productCart', mainController.productDetail);// al acceder al carro de compras llamo al controlador en el metodo productCart
// ^═pasar al routes de producto
router.get('/register', mainController.register);// al acceder al registro llamo al controlador en el metodo register
router.get('/login', mainController.register);// al acceder al login del sistema  llamo al controlador en el metodo login

module.exports = router;