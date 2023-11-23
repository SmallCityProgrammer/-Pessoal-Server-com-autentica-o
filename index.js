require('dotenv').config();
const app = require('./app');
const port = 3000;
const mongoose = require('mongoose');
const Product = require('./Models/productSchema');
const indexRoute = require('./Routes/indexRoute')

mongoose.connect(process.env.CONNECTIONSTRING)

app.use('/', indexRoute);

app.listen(port, () => {
  console.log('Funcionando! na port' + ' http://localhost:3000/')
})