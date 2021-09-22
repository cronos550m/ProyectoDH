/*ruteador encargado de todas las rutas pertenecientes a los productos*/

const express = require('express'); // requiero express para trabajar con el modulo router
const router = express.Router(); // asigno el modulo router a la constante router
const productController = require ('../controllers/productController'); /*requiero el controlador product (este contiene todas las rutas referidas a los productos)
                                                                    ..para salir de la carpeta*/

router.get('/productDetail/:id', productController.productDetail);// al acceder al detalle de producto llamo al controlador en el metodo productDetail con su id
router.get('/productCart', productController.productCart);// al acceder al carro de compras llamo al controlador en el metodo productCart
router.get('/productNew', productController.productNew);// al acceder al productNew  llamo al controlador en el metodo productNew
router.get('/products', productController.products);// al acceder al products  llamo al controlador en el metodo products
router.post('/productNew',productController.insertProduct);// cuando llega el metodo post de product new accedo a esta ruta
router.get('/products/:id/edit',productController.editProduct);
router.post('/products/:id/edit',productController.saveEditedProduct);


module.exports = router;