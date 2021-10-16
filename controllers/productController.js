/* este controlador se encarga de relacionar los eventos de los productos con las vistas*/
const path = require('path'); // modulo para relacionar las rutas
let dbProductos = require("../db/product.json");// levanto la base de datos de productos
const fs = require("fs"); // requiero el modulo fs para poder leer archivos y escribirlos
const productModelJSON= require("../models/productModelJSON") // requiero el modelo

const controller = {
    productDetail: (req, res) => {
        const producto = productModelJSON.productSearch(req.params.id);// llamo al modelo con el id que viene de la url
        res.render(path.join(__dirname, '../src/views/products/productDetail.ejs'), { product: producto })
         //devuelve la vista del detalle de producto y paso como parametro un prodructo
    },
    productCart: (req, res) => {
        res.render(path.join(__dirname, '../src/views/products/productCart.ejs')) //devuelve la vista del carro de compras en este evento
    },
    productNew: (req, res) => {
        res.render(path.join(__dirname, '../src/views/products/productNew.ejs')) //devuelve la vista para agregar y editar producto en este evento
    },
    products: (req, res) => {
        const productos= productModelJSON.products(); //llamo al modelo para obtener todos los productos
        res.render(path.join(__dirname, '../src/views/products/products.ejs'), { products: productos })
        //devuelve la vista de los productos en este evento, paso como parametro la variable con todo el array de productos
    },
    productInsert: (req, res) => {
          res.render(path.join(__dirname, '../src/views/products/products.ejs'), { products: productModelJSON.productInsert(req.body) }) 
          // renderizo la vista de todos los productos una vez llamado al modelo para insertar un producto
    },
    productEdit:(req,res)=>{
        const producto = productModelJSON.productSearch(req.params.id)// llamo al modelo con el id que viene de la url
        res.render(path.join(__dirname, '../src/views/products/productEdit.ejs'), { product: producto }) //devuelve el formulario de edicion de producto
    },
    productSaveEdited:(req,res)=>{
        res.render(path.join(__dirname, '../src/views/products/products.ejs'), { products: productModelJSON.productSaveEdited(parseInt(req.params.id),req.body) })
         // llamo al modelo para guardar un producto editado
    },
    productDelete: (req,res)=>{
        res.render(path.join(__dirname, '../src/views/products/products.ejs'), { products: productModelJSON.productDelete(parseInt(req.params.id)) }) // renderizo la vista de todos los productos
    }
};


module.exports = controller;




