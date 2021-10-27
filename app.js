const express = require('express'); 
const session = require('express-session');

let mainRoutes = require('./routes/main.routes');
let productRoutes = require('./routes/product.routes');
let userRoutes = require('./routes/user.routes');

const app = express();


const path = require('path');
const publicPath = path.resolve(__dirname, './src/public');
const methodOverride = require('method-override')
const UserLoggedMiddleware = require('./middleware/UserLoggedMiddleware');


const port = process.env.PORT || '5000';


app.use(express.urlencoded({ extended: false })); //para poder trabajar con los datos que envia el formulario
app.use(express.json()); //para poder trabajar con archivos json
app.use(express.static(publicPath)); // expone la carpeta publica
app.use(session({
    secret: "compumundo-hypermegared,  No me hice rico firmando cheques",
    resave: false,
    saveUninitialized: false
})); //mid para verificar sesiones 
app.use(UserLoggedMiddleware); //mid para verificar usuario logeado

app.listen(port, () => {
    console.log(`Server is runnig in Port : ${port}`);
})
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use('/', mainRoutes);
app.use('/', productRoutes);
app.use('/', userRoutes);
// app.set('/views', path.join(__dirname, './src/views'));

app.use((req, res, next) => {
    res.status(404).render('error')
});









// app.listen(3000,()=>{

// console.log(`Server is runnig in the Port : 3000`);
// })
/*
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
*/
