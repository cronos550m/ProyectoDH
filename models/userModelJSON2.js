/* Modelo de usuarios con base de datos en JSON*/
const path = require('path'); // modulo para relacionar las rutas
const bcrypt = require('bcrypt');
let dbUsuarios = require("../db/user.json");// levanto la base de datos de usuarios
const fs = require("fs"); // requiero el modulo fs para poder leer archivos y escribirlos

const userModelJSON = {
    userInsert: function(objetoUsuario,nombreImagen){
        const newId= dbUsuarios.length +1;
        const{nombre,apellido,email,telefono,pais,provincia,ciudad,calle,numero,codigoPostal,dni,password}=objetoUsuario;
        const newUser={
            "id": newId,
            "nombre":  nombre,
            "apellido": apellido,
            "email": email,
            "telefono": telefono,
            "imagen": `/images/user/${nombreImagen}`,
            "pais": pais,
            "provincia": provincia,
            "ciudad": ciudad,
            "calle": calle,
            "numero": numero,
            "codigoPostal": codigoPostal,
            "dni": dni,
            "password": bcrypt.hashSync(password,10),
            "categoria": "user"            
        }
        dbUsuarios.push(newUser)
        fs.writeFileSync(path.join(__dirname,"../db/user.json"), JSON.stringify(dbUsuarios, null, 4), {encoding: "utf8",}); 
        return newUser;        
    }
};

module.exports = userModelJSON;