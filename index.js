require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Product = require('./Models/productSchema');
const indexRoute = require('./Routes/indexRoute')

mongoose.connect(process.env.CONNECTIONSTRING)
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}))

app.set('views', './views');
app.set('view engine', 'ejs')

//Views
app.get('/home', async (req,res) => {
  const product = await Product.find();
  res.render('index', {product})
})

app.use('/', indexRoute);

app.listen(port, () => {
  console.log('Funcionando! na port' + ' http://localhost:3000/home')
})