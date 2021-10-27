/* este controlador se encarga de relacionar los eventos de los productos con las vistas*/
const path = require('path'); // modulo para relacionar las rutas
const productModelJSON= require("../models/ProductModelJSON") // requiero el modelo de productos

const controller = {
    productDetail: (req, res) => {
        res.render(path.join(__dirname, '../src/views/products/productDetail.ejs'), { product: productModelJSON.productSearch(req.params.id) })
         //llamo al modelo enviando id de la url devuelve la vista del detalle de producto
    },
    productCart: (req, res) => {
        res.render(path.join(__dirname, '../src/views/products/productCart.ejs')) 
        //devuelve la vista del carro de compras DARLE VIDA!!!
    },
    productNew: (req, res) => {
        res.render(path.join(__dirname, '../src/views/products/productNew.ejs')) 
        //devuelve la vista para agregar producto 
    },
    productAll: (req, res) => {
        res.render(path.join(__dirname, '../src/views/products/products.ejs'), { products: productModelJSON.productAll() })
        //llamo al modelo para obtener todos los productos devuelve la vista de los productos
    },
    productInsert: (req, res) => {
        res.render(path.join(__dirname, '../src/views/products/products.ejs'), { products: productModelJSON.productInsert(req.body) }) 
        // llamado al modelo para insertar un producto,enviando datos del body y renderizo la vista de todos los productos
    },
    productEdit:(req,res)=>{
        res.render(path.join(__dirname, '../src/views/products/productEdit.ejs'), { product: productModelJSON.productSearch(req.params.id) })
        // llamo al modelo enviando id de la url y devuelve el formulario de edicion de producto con todos sus datos
    },
    productSaveEdited:(req,res)=>{
        res.render(path.join(__dirname, '../src/views/products/products.ejs'), { products: productModelJSON.productSaveEdited(parseInt(req.params.id),req.body) })
         // llamo al modelo para guardar un producto editado, enviando id del url y datos del body
    },
    productDelete: (req,res)=>{
        res.render(path.join(__dirname, '../src/views/products/products.ejs'), { products: productModelJSON.productDelete(parseInt(req.params.id)) })
         // llamo al modelo para eliminar un producto, enviando el id de la url
    }
};
module.exports = controller;




