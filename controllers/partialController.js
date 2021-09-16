/* este controlador se encarga de relacionar los eventos del main con las vistas*/
const path = require('path'); // modulo para relacionar las vistas

const controller={
    footer:(req,res)=>{ 
        res.render(path.join(__dirname,'../src/views/partials/footer.ejs')) //devuelve la vista del footer en este evento
    },
    head:(req,res)=>{ 
        res.render(path.join(__dirname,'../src/views/partials/head.ejs')) //devuelve la vista del head en este evento
    },
    header:(req,res)=>{ 
        res.render(path.join(__dirname,'../src/views/partials/header.ejs')) //devuelve la vista del header en este evento
    },
    product:(req,res)=>{ 
        res.render(path.join(__dirname,'../src/views/partials/product.ejs')) //devuelve la vista del product en este evento
    }
};

module.exports = controller;