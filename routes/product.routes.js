/*ruteador encargado de todas las rutas pertenecientes a los productos*/

const express = require('express'); // requiero express para trabajar con el modulo router
const router = express.Router(); // asigno el modulo router a la constante router
const productController = require ('../controllers/productController'); /*requiero el controlador product (este contiene todas las rutas referidas a los productos)
                                                                    ..para salir de la carpeta*/

router.get('/productDetail/:id', productController.productDetail);// al acceder al detalle de producto llamo al controlador en el metodo productDetail con su id
router.get('/productCart', productController.productCart);// al acceder al carro de compras llamo al controlador en el metodo productCart
router.get('/productNew', productController.productNew);// al acceder al productNew  llamo al controlador en el metodo productNew
router.get('/products', productController.productAll);// al acceder al products  llamo al controlador en el metodo products
router.post('/productNew',productController.productInsert);// cuando llega el metodo post de product new accedo a esta ruta
router.get('/products/:id/edit',productController.productEdit);
router.put('/products/:id/edit',productController.productSaveEdited);
router.delete('/products/:id', productController.productDelete)


module.exports = router;