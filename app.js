const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');
const port = process.env.PORT || '5000';

app.use( express.static(publicPath) );

app.listen(port,()=>{

console.log(`Server is runnig in the Port : ${port}`);
})

// app.listen(3000,()=>{

// console.log(`Server is runnig in the Port : 3000`);
// })

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/index.html'))
})
app.get('/products',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/products.html'))
})
app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/register.html'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/login.html'))
})

app.get('/slider',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/slider.html'))
})