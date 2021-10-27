/* este controlador se encarga de relacionar los eventos de los usuarios con las vistas*/

//const dbProductos = require("../db/product.json");// levanto la base de datos de productos
//const { validationResult } = require('express-validator'); se crea pero no se utiliza
const path = require('path'); // modulo para relacionar las vistas
const UserModelJSON= require ('../models/UserModelJSON')
const bcryptjs = require('bcryptjs');



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
        res.render(path.join(__dirname,'../src/views/users/profile'),{user: req.session.userLogged}) //devuelve la vista del forget en este evento
    },
    userInsert: (req,res)=>{
        userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password,10),
            imagen: `/images/user/${req.file.filename}`,
            categoria: "user"
        }
        let userCreated = UserModelJSON.userCreate(userToCreate);
        return res.redirect("/login");

        /* const resultValidation = validationResult(req) //validaciones del body
        if (resultValidation.errors.length > 0) {
            return res.render(path.join(__dirname,'../src/views/users/register.ejs'),{
                errors: resultValidation.mapped(),
                dataEntry: req.body
            })
        };

        let userExist = userSearchByField('email', req.body.email); //validaciones del email
        if (userExist) {
            return res.render(path.join(__dirname,'../src/views/users/register.ejs'),{
                errors: {
                    msg: "Este email ya se encuentra registrado"
                },
                dataEntry: req.body
            })
        }
        no validamos desde express validator pero lo implementamos */
    },

    userLoginProcess:(req,res) => {
        let userToLogin = UserModelJSON.userSearchByField('email', req.body.email);
        if (userToLogin) {
            if (bcryptjs.compareSync(req.body.password,userToLogin.password)) {
                delete userToLogin.password
                req.session.userLogged = userToLogin;
                return res.redirect('/profile')
            }
        }
       return res.render(path.join(__dirname,'../src/views/users/login.ejs'),{
            errors:{
                email: {
                    msg: "credenciales invalidas"}
            }
        })
    }
};

module.exports = controller;