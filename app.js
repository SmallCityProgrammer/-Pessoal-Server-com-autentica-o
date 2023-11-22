const express = require('express');
const path = require('path');
const app = express();

app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({extended:true}))

module.exports = app;
