/* este controlador se encarga de relacionar los eventos del main con las vistas*/
const path = require('path'); // modulo para relacionar las vistas
const userModelJSON= require ('../models/userModelJSON')
const dbProductos = require("../db/product.json");// levanto la base de datos de productos

const controller={
    userRegister:(req,res)=>{ 
        res.render(path.join(__dirname,'../src/views/users/register.ejs')) //devuelve la vista del registro en este evento
    },
    userLogin:(req,res)=>{ 
        res.render(path.join(__dirname,'../src/views/users/login.ejs')) //devuelve la vista del login en este evento
    },
    userForget:(req,res)=>{ 
        res.render(path.join(__dirname,'../src/views/users/forget.ejs')) //devuelve la vista del forget en este evento
    },
    userProfile:(req,res)=>{ 
        res.render(path.join(__dirname,'../src/views/users/profile')) //devuelve la vista del forget en este evento
    },
    userInsert: (req,res)=>{
        res.render(path.join(__dirname,'../src/views/index.ejs'), { products: dbProductos , user: userModelJSON.userInsert(req.body)})
         //devuelve la vista del index en este evento, con los datos de articulos y del usuario
    }
};

module.exports = controller;