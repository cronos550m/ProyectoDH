/*ruteador encargado de todas las rutas pertenecientes a los productos*/

const express = require('express'); // requiero express para trabajar con el modulo router
const router = express.Router(); // asigno el modulo router a la constante router
const productController = require ('../controllers/productController'); /*requiero el controlador product (este contiene todas las rutas referidas a los productos)
                                                                    ..para salir de la carpeta*/

router.get('/productDetail', productController.productDetail);// al acceder al detalle de producto llamo al controlador en el metodo productDetail
router.get('/productCart', productController.productCart);// al acceder al carro de compras llamo al controlador en el metodo productCart


module.exports = router;