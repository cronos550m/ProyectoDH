/* este controlador se encarga de relacionar los eventos del main con las vistas*/
const path = require('path'); // modulo para relacionar las vistas

const controller={
    home: (req,res)=>{ 
        res.sendFile(path.join(__dirname,'../src/views/index.html')) //devuelve la vista del index en este evento
    },
    loader:(req,res)=>{
        res.sendFile(path.join(__dirname,'../src/views/loader.html')) //devuelve la vista del loader en este evento
    },
    register:(req,res)=>{ 
        res.sendFile(path.join(__dirname,'../src/views/register.html')) //devuelve la vista del registro en este evento
    },
    login:(req,res)=>{ 
        res.sendFile(path.join(__dirname,'../src/views/login.html')) //devuelve la vista del login en este evento
    },
    footer:(req,res)=>{ 
        res.sendFile(path.join(__dirname,'../src/views/footer.html')) //devuelve la vista del footer en este evento
    },
    header:(req,res)=>{ 
        res.sendFile(path.join(__dirname,'../src/views/header.html')) //devuelve la vista del header en este evento
    },
    forget:(req,res)=>{ 
        res.sendFile(path.join(__dirname,'../src/views/forget.html')) 
    },

};

module.exports = controller;