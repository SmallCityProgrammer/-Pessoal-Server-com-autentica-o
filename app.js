require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Product = require('./Models/productSchema')

mongoose.connect(process.env.CONNECTIONSTRING)
app.use(express.json());

app.set('view engine', 'ejs');

//CRUD
app.get('/',async (req,res) => {
  res.render('index')
  const product = await Product.find();
  res.status(200).json(product)
})

app.get('/:id',async (req,res) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json(product)
})

app.post('/', async (req,res) => {
  const product = await Product.create(req.body);
  res.status(200).json(product)
})

app.listen(port, () => {
  console.log('Funcionando! na port' + ' http://localhost:3000')
})