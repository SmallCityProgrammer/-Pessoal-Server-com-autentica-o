require('dotenv').config();
const path = require('path');

const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Product = require('./Models/productSchema');
const authService = require('./Service/authService');
const router = express.Router();
const indexRoute = require('./Routes/indexRoute')

mongoose.connect(process.env.CONNECTIONSTRING)
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//Views
app.get('/home', async (req,res) => {
  const product = await Product.find();
  res.render('index', {product})
})

app.get('/',async (req,res) => {
  const product = await Product.find();
  res.status(200).json(product)
})

app.get('/:id',async (req,res) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json(product)
})

app.use('/', indexRoute);

// app.post('/', authService.authorize , async (req,res) => {
//   const product = await Product.create(req.body);
//   res.status(200).redirect('/home')
// })

app.put('/:id', async (req,res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
    )
  res.status(200).json(product)
})

app.delete('/:id', async (req,res) => {
  const product = await Product.findByIdAndDelete(req.params.id)
  res.status(200).json(product)
})

app.listen(port, () => {
  console.log('Funcionando! na port' + ' http://localhost:3000/home')
})