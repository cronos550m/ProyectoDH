/*routeador encargado de todas las rutas pertenecientes al main*/

const express = require('express'); // requiero express para trabajar con el modulo router
const router = express.Router(); // asigno el modulo router a la constante router
const userController = require ('../controllers/userController.js'); /*requiero el controlador main (este contiene todas las rutas referidas al main)
                                                                    ..para salir de la carpeta*/



router.get('/register', userController.register);// al acceder al registro llamo al controlador en el metodo register
router.get('/login', userController.login);// al acceder al login del sistema  llamo al controlador en el metodo login
router.get('/forget', userController.forget);// al acceder al forget  llamo al controlador en el metodo forget
router.get('/profile', userController.profile);// al acceder al forget  llamo al controlador en el metodo profile


module.exports = router;