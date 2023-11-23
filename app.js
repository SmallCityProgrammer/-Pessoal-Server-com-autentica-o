const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static(__dirname + "/public"))

app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');

module.exports = app;