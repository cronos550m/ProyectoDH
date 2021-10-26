/*routeador encargado de todas las rutas pertenecientes al main*/

const express = require('express'); // requiero express para trabajar con el modulo router
const router = express.Router(); // asigno el modulo router a la constante router
const multerMiddleware = require('../middleware/multerMiddleware') // Mid para trabajar con envios de archivos
const validationMiddleware = require('../middleware/validationMiddleware') //mid para validaciones no es utilizado
const userController = require ('../controllers/userController.js'); /*requiero el controlador main (este contiene todas las rutas referidas al main)
                                                                    ..para salir de la carpeta*/



router.get('/register', userController.userRegister);// al acceder al registro llamo al controlador en el metodo register
router.get('/login', userController.userLogin);// al acceder al login del sistema  llamo al controlador en el metodo login
router.get('/forget', userController.userForget);// al acceder al forget  llamo al controlador en el metodo forget
router.get('/profile', userController.userProfile);// al acceder al forget  llamo al controlador en el metodo profile
router.post('/register',multerMiddleware.single('imagen'), userController.userInsert); // procesar el registro de usuario

module.exports = router;