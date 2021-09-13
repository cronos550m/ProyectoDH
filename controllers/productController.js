/* este controlador se encarga de relacionar los eventos de los productos con las vistas*/
const path = require('path'); // modulo para relacionar las vistas

const controller={
    productDetail:(req,res)=>{ 
        res.sendFile(path.join(__dirname,'../src/views/productDetail.html')) //devuelve la vista del detalle de producto en este evento
    },
    productCart:(req,res)=>{ 
        res.sendFile(path.join(__dirname,'../src/views/productCart.html')) //devuelve la vista del carro de compras en este evento
    },
    productNew:(req,res)=>{ 
        res.sendFile(path.join(__dirname,'../src/views/productNew.html')) //devuelve la vista adicion y edicion de producto en este evento
    }
};


module.exports = controller;




