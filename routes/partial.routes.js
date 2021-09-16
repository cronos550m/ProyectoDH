/*routeador encargado de todas las rutas pertenecientes al main*/

const express = require('express'); // requiero express para trabajar con el modulo router
const router = express.Router(); // asigno el modulo router a la constante router
const partialController = require ('../controllers/partialController.js'); /*requiero el controlador main (este contiene todas las rutas referidas al main)
                                                                    ..para salir de la carpeta*/


router.get('/product', partialController.loader);// al acceder al product llamo al controlador en el metodo product
router.get('/footer', partialController.footer);// al acceder al footer  llamo al controlador en el metodo footer
router.get('/head', partialController.header);// al acceder al header  llamo al controlador en el metodo header
router.get('/header', partialController.header);// al acceder al header  llamo al controlador en el metodo header


module.exports = router;