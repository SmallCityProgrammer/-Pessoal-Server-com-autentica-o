require('dotenv').config();
const app = require('./app');
const port = 3000;
const mongoose = require('mongoose');
const Product = require('./Models/productSchema');
const indexRoute = require('./Routes/indexRoute')

mongoose.connect(process.env.CONNECTIONSTRING)

//Views
app.get('/home', async (req,res) => {
  const product = await Product.find();
  res.render('index', {product})
})

app.use('/', indexRoute);

app.listen(port, () => {
  console.log('Funcionando! na port' + ' http://localhost:3000/home')
})