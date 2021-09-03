const { Router } = require('express');
let express = require('express');
let productosController = require('../controllers/productosController.js');

let router = express.Router();

Router.get('/:idProducto', productosController.detalle); 

Router.get('/:idProducto/comentarios/:idComentario?', productosController.detalleComentarios);

module.exports = router;