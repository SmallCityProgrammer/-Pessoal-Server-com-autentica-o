const express = require('express');
const app = express();
const port = 3000;
const userSchema = require('./Models/productSchema')

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