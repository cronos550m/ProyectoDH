// midleware encargado de todas las validaciones, no se usa ya que implementamos validaciones con js

const { body } = require('express-validator');
const path = require("path");

const validations =[
    body('nombre').notEmpty().withMessage('Debes ingresar un Nombre'),
    body('apellido').notEmpty().withMessage('Debes ingresar un Apellido'),
    body('email').notEmpty().withMessage('Debes ingresar un Email')
        .bail().isEmail().withMessage("Debes ingresar un formato de correo valido "),
    body('telefono').notEmpty().withMessage('Debes ingresar un Telefono'),
    body('pais').notEmpty().withMessage('Debes elegir un Pais'),
    body('provincia').notEmpty().withMessage('Debes ingresar una Provincia'),
    body('ciudad').notEmpty().withMessage('Debes ingresar una Ciudad'),
    body('calle').notEmpty().withMessage('Debes ingresar una Calle'),
    body('numero').notEmpty().withMessage('Debes ingresar un Numero de Calle'),
    body('codigoPostal').notEmpty().withMessage('Debes ingresar un Codigo Postal'),
    body('dni').notEmpty().withMessage('Debes ingresar un DNI'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
    body('passwordConfirm').notEmpty().withMessage('La contraseña no coincide'),
    body('image')
    .custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.JPG', '.JPEG', '.PNG', '.GIF'];
      if (!file) {
          throw new Error('Tienes que subir una imagen');
      } else {
          let fileExtension = path.extname(file.originalname);
          if (!acceptedExtensions.includes(fileExtension)) {
              throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
          }
      }
      return true;
    })

];

module.exports = validations