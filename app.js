const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname + "/public"))
app.use(express.json());

app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');


module.exports = app;
