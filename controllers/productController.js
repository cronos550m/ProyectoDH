/* este controlador se encarga de relacionar los eventos de los productos con las vistas*/
const path = require('path'); // modulo para relacionar las rutas
const productModelJSON= require("../models/productModelJSON") // requiero el modelo

const controller = {
    productDetail: (req, res) => {
        res.render(path.join(__dirname, '../src/views/products/productDetail.ejs'), { product: productModelJSON.productSearch(req.params.id) })
         //llamo al modelo con el id que viene de la url devuelve la vista del detalle de producto
    },
    productCart: (req, res) => {
        res.render(path.join(__dirname, '../src/views/products/productCart.ejs')) //devuelve la vista del carro de compras en este evento
    },
    productNew: (req, res) => {
        res.render(path.join(__dirname, '../src/views/products/productNew.ejs')) //devuelve la vista para agregar y editar producto en este evento
    },
    products: (req, res) => {
        res.render(path.join(__dirname, '../src/views/products/products.ejs'), { products: productModelJSON.products() })
        //llamo al modelo para obtener todos los productos devuelve la vista de los productos
    },
    productInsert: (req, res) => {
          res.render(path.join(__dirname, '../src/views/products/products.ejs'), { products: productModelJSON.productInsert(req.body) }) 
          // llamado al modelo para insertar un producto yr enderizo la vista de todos los productos una vez 
    },
    productEdit:(req,res)=>{
        res.render(path.join(__dirname, '../src/views/products/productEdit.ejs'), { product: productModelJSON.productSearch(req.params.id) })
         //// llamo al modelo con el id que viene de la url y devuelve el formulario de edicion de producto
    },
    productSaveEdited:(req,res)=>{
        res.render(path.join(__dirname, '../src/views/products/products.ejs'), { products: productModelJSON.productSaveEdited(parseInt(req.params.id),req.body) })
         // llamo al modelo para guardar un producto editado
    },
    productDelete: (req,res)=>{
        res.render(path.join(__dirname, '../src/views/products/products.ejs'), { products: productModelJSON.productDelete(parseInt(req.params.id)) })
         // llamo al modelo para eliminar un producto
    }
};


module.exports = controller;




