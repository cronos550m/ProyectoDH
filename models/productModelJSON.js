/* Modelo para trabajar con base de datos en JSON*/
const path = require('path'); // modulo para relacionar las rutas
let dbProductos = require("../db/product.json");// levanto la base de datos de productos
const fs = require("fs"); // requiero el modulo fs para poder leer archivos y escribirlos

const productModelJSON={
    productSearch: function(id){ // busca y devuelve un producto
        const producto = dbProductos.find(item => item.id == id); // busco el id en la base
        return producto 
    },
    products: function(){ // devuelve todos los productos
        return dbProductos;
    },
    productInsert: function(objetoProducto){// inserta un producto y devuelve la base de datos
        const newId = dbProductos.length+1 // busco el ultimo id y le sumo 1
        const {nombre,descripcion,detalle,cantidad,precio,descuento,envio}=objetoProducto; // requiero toda la info del body
        const newProduct={ // creo un objeto con toda la info del body
                "id": newId,
                "nombre": nombre,
                "descripcion": descripcion,
                "detalle": detalle,
                "imagen": "/images/imagen-no-disponible.jpg", //harcodeo la imagen
                "cantidad": cantidad,
                "precio": precio,
                "descuento": descuento,
                "envio": envio
        };
        dbProductos.push(newProduct) //agrego el nuevo producto al final de la base
        fs.writeFileSync(path.join(__dirname,"../db/product.json"), JSON.stringify(dbProductos, null, 4), {
            encoding: "utf8",
          }); // escribo el array en el archivo de base de datos
        return dbProductos
    },
    productSaveEdited: function(id,objetoProducto){// modifica y guarda un producto y devuelve todos los productos
        const {nombre,descripcion,detalle,cantidad,precio,descuento,envio}=objetoProducto; // requiero toda la info del body
        const saveEditedProduct={ // creo un objeto con toda la info del body
                "id": id,
                "nombre": nombre,
                "descripcion": descripcion,
                "detalle": detalle,
                "imagen": "/images/imagen-no-disponible.jpg", //harcodeo la imagen
                "cantidad": cantidad,
                "precio": precio,
                "descuento": descuento,
                "envio": envio
        };
        dbProductos[id - 1] = saveEditedProduct
        fs.writeFileSync(path.join(__dirname, "../db/product.json"), JSON.stringify(dbProductos, null, 4), {
            encoding: "utf8",
        }); // escribo el array en el archivo de base de datos
        return dbProductos
    },
    productDelete: function(id){
        let newDb= dbProductos.filter(item => item.id != id);
        dbProductos=newDb;
        fs.writeFileSync(path.join(__dirname, "../db/product.json"), JSON.stringify(dbProductos, null, 4), { encoding: "utf8", }); // escribo el array en el archivo de base de datos
        return dbProductos
    }

}

module.exports = productModelJSON