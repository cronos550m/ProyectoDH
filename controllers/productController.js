/* este controlador se encarga de relacionar los eventos de los productos con las vistas*/
const path = require('path'); // modulo para relacionar las rutas
const dbProductos = require("../db/product.json");// levanto la base de datos de productos
const fs = require("fs"); // requiero el modulo fs para poder leer archivos y escribirlos


const controller = {
    productDetail: (req, res) => {
        const id = req.params.id; // uso el id que viene desde la ruta
        const producto = dbProductos.find(item => item.id == id); // busco el id en la base
        res.render(path.join(__dirname, '../src/views/products/productDetail.ejs'), { product: producto }) //devuelve la vista del detalle de producto y paso como parametro un prodructo
    },
    productCart: (req, res) => {
        res.render(path.join(__dirname, '../src/views/products/productCart.ejs')) //devuelve la vista del carro de compras en este evento
    },
    productNew: (req, res) => {
        res.render(path.join(__dirname, '../src/views/products/productNew.ejs')) //devuelve la vista adicion y edicion de producto en este evento
    },
    products: (req, res) => {
        res.render(path.join(__dirname, '../src/views/products/products.ejs'), { products: dbProductos })
        //devuelve la vista de los productos en este evento, paso como parametro la variable con todo el array de productos
    },
    insertProduct: (req, res) => { // verificar porque no me llegan cosas del body
        const newId = dbProductos[(dbProductos.length) - 1].id + 1  // busco el ultimo id y le sumo 1
        console.log(req.body);
    }
};


module.exports = controller;




