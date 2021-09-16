/* este controlador se encarga de relacionar los eventos del main con las vistas*/
const path = require('path'); // modulo para relacionar las vistas

const controller={
    home: (req,res)=>{ 
        res.render(path.join(__dirname,'../src/views/index.ejs')) //devuelve la vista del index en este evento
    }
};

module.exports = controller;