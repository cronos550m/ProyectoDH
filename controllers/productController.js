/* este controlador se encarga de relacionar los eventos de los productos con las vistas*/
const path = require('path'); // modulo para relacionar las vistas

const controller={
    productDetail:(req,res)=>{ 
        res.render(path.join(__dirname,'../src/views/products/productDetail.ejs')) //devuelve la vista del detalle de producto en este evento
    },
    productCart:(req,res)=>{ 
        res.render(path.join(__dirname,'../src/views/products/productCart.ejs')) //devuelve la vista del carro de compras en este evento
    },
    productNew:(req,res)=>{ 
        res.render(path.join(__dirname,'../src/views/products/productNew.ejs')) //devuelve la vista adicion y edicion de producto en este evento
    },
    products:(req,res)=>{ 
        res.render(path.join(__dirname,'../src/views/products/products.ejs')) //devuelve la vista de los productos en este evento
    }
};


module.exports = controller;




