/* este controlador se encarga de relacionar los eventos de los productos con las vistas*/
const path = require('path'); // modulo para relacionar las rutas
let dbProductos = require("../db/product.json");// levanto la base de datos de productos
const fs = require("fs"); // requiero el modulo fs para poder leer archivos y escribirlos


const controller = {
    productDetail: (req, res) => {
        const id = req.params.id; // uso el id que viene desde la ruta
        const producto = dbProductos.find(item => item.id == id); // busco el id en la base
        res.render(path.join(__dirname, '../src/views/products/productDetail.ejs'), { product: producto }) //devuelve la vista del detalle de producto y paso como parametro un prodructo
    },
    productCart: (req, res) => {
        res.render(path.join(__dirname, '../src/views/products/productCart.ejs')) //devuelve la vista del carro de compras en este evento
    },
    productNew: (req, res) => {
        res.render(path.join(__dirname, '../src/views/products/productNew.ejs')) //devuelve la vista adicion y edicion de producto en este evento
    },
    products: (req, res) => {
        res.render(path.join(__dirname, '../src/views/products/products.ejs'), { products: dbProductos })
        //devuelve la vista de los productos en este evento, paso como parametro la variable con todo el array de productos
    },
    productInsert: (req, res) => {
        const newId = dbProductos[(dbProductos.length) - 1].id + 1  // busco el ultimo id y le sumo 1
        const {nombre,descripcion,detalle,cantidad,precio,descuento,envio}=req.body; // requiero toda la info del body
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
          res.render(path.join(__dirname, '../src/views/products/products.ejs'), { products: dbProductos }) // renderizo la vista de todos los productos
    },
    productEdit:(req,res)=>{
        const id= req.params.id     // uso el id que viene desde la ruta
        const producto= dbProductos.find(item => item.id == id); // busco el id en la base
        res.render(path.join(__dirname, '../src/views/products/productEdit.ejs'), { product: producto }) //devuelve el formulario de edicion de producto
    },
    productSaveEdited:(req,res)=>{
        const id= parseInt(req.params.id);     // uso el id que viene desde la ruta
        const {nombre,descripcion,detalle,cantidad,precio,descuento,envio}=req.body; // requiero toda la info del body
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
        res.render(path.join(__dirname, '../src/views/products/products.ejs'), { products: dbProductos }) // renderizo la vista de todos los productos
    },
    productDelete: (req,res)=>{
        const idABorrar= parseInt(req.params.id);     // uso el id que viene desde la ruta
        let newDb= dbProductos.filter(item => item.id != idABorrar);
        dbProductos=newDb;
        fs.writeFileSync(path.join(__dirname, "../db/product.json"), JSON.stringify(dbProductos, null, 4), { encoding: "utf8", }); // escribo el array en el archivo de base de datos
        res.render(path.join(__dirname, '../src/views/products/products.ejs'), { products: dbProductos }) // renderizo la vista de todos los productos
    }
};


module.exports = controller;




