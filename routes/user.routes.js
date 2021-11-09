/*routeador encargado de todas las rutas pertenecientes al main*/

const express = require('express'); // requiero express para trabajar con el modulo router
const router = express.Router(); // asigno el modulo router a la constante router
const multerMiddleware = require('../middleware/multerMiddleware') // Mid para trabajar con envios de archivos
const validationMiddleware = require('../middleware/validationMiddleware') //mid para validaciones no es utilizado
const guestMiddleware = require('../middleware/guestMiddleware') // mid para validar sesion
const authtMiddleware = require('../middleware/authMiddleware') // mid para validar que no haya nadie en sesion

const userController = require ('../controllers/userController.js'); /*requiero el controlador main (este contiene todas las rutas referidas al main)
                                                                    ..para salir de la carpeta*/



router.get('/register', guestMiddleware, userController.userRegister);// accedo al formulario de registro controlando la sesion
router.get('/login', guestMiddleware, userController.userLogin);// accedo al formulario de login controlando la sesion
router.get('/forget', userController.userForget);// al acceder al forget  llamo al controlador en el metodo forget
router.get('/profile', authtMiddleware, userController.userProfile);// al acceder al forget  llamo al controlador en el metodo profile
router.post('/register',multerMiddleware.single('imagen'), userController.userInsert); // procesar el registro de usuario
router.post('/login',userController.userLoginProcess); // proceso el login de usuario
router.get('/logout', userController.userLogout);
router.get('/adminUser', userController.adminUser);// al acceder al forget  llamo al controlador en el metodo adminUser
router.get('/adminProducts', userController.adminProducts);// al acceder al forget  llamo al controlador en el metodo adminProducts
module.exports = router;