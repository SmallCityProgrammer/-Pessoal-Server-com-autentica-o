require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const userSchema = require('./Models/productSchema')

mongoose.connect(process.env.CONNECTIONSTRING)

//CRUD
app.get('/',(req,res) => {
  res.send("Olá mundo")
})

app.post('/', (req,res) => {
  res.send(userSchema);
  console.log('Funcionou!')
})

app.put('/:id', (req, res) => {
})

app.delete('/:id', (req) => {
})

app.listen(port, () => {
  console.log('Funcionando! na port' + ' http://localhost:3000')
})