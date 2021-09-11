const express = require('express');
const app = express();
// let rutasProductos = require('./routes/productos.js');
// let rutasMain = require('./routes/main.js');
const path = require('path');
const publicPath = path.resolve(__dirname, './src/public');
const port = process.env.PORT || '5000';

app.use( express.static(publicPath) );
// app.use('/productos', rutasProductos);
// app.use('/', rutasMain);

app.listen(port,()=>{

console.log(`Server is runnig in the Port : ${port}`);
})

// app.listen(3000,()=>{

// console.log(`Server is runnig in the Port : 3000`);
// })

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./src/views/index.html'))
})
app.get('/loader',(req,res)=>{
    res.sendFile(path.join(__dirname,'./src/views/loader.html'))
})
app.get('/productDetail',(req,res)=>{
    res.sendFile(path.join(__dirname,'./src/views/productDetail.html'))
})
app.get('/productCart',(req,res)=>{
    res.sendFile(path.join(__dirname,'./src/views/productCart.html'))
})
app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'./src/views/register.html'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'./src/views/login.html'))
    // res.sendFile(path.join(__dirname,'./views/login.html'))
})
app.get('/footer',(req,res)=>{
    res.sendFile(path.join(__dirname,'./src/views/footer.html'))
})
app.get('/header',(req,res)=>{
    res.sendFile(path.join(__dirname,'./src/views/header.html'))
})
app.get('/forget',(req,res)=>{
    res.sendFile(path.join(__dirname,'./src/views/forget.html'))
})
app.get('/productNew',(req,res)=>{
    res.sendFile(path.join(__dirname,'./src/views/productNew.html'))
})