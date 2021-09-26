/* este controlador se encarga de relacionar los eventos del main con las vistas*/
const path = require('path'); // modulo para relacionar las vistas

const controller={
    register:(req,res)=>{ 
        res.render(path.join(__dirname,'../src/views/users/register.ejs')) //devuelve la vista del registro en este evento
    },
    login:(req,res)=>{ 
        res.render(path.join(__dirname,'../src/views/users/login.ejs')) //devuelve la vista del login en este evento
    },
    forget:(req,res)=>{ 
        res.render(path.join(__dirname,'../src/views/users/forget.ejs')) //devuelve la vista del forget en este evento
    },
    profile:(req,res)=>{ 
        res.render(path.join(__dirname,'../src/views/users/profile')) //devuelve la vista del forget en este evento
    }
};

module.exports = controller;