/*routeador encargado de todas las rutas pertenecientes al main*/

const express = require('express'); // requiero express para trabajar con el modulo router
const router = express.Router(); // asigno el modulo router a la constante router
const mainController = require ('../controllers/mainController.js'); /*requiero el controlador main (este contiene todas las rutas referidas al main)
                                                                    ..para salir de la carpeta*/


router.get('/', mainController.home); // al acceder al home llamo al controlador en el metodo home


module.exports = router;