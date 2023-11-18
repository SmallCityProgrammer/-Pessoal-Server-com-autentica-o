const express = require('express')
const router = express.Router();
const homeController = require('../Controllers/homeController')

exports.router('/', homeController.get)
exports.router('/', homeController.post)
exports.router('/:id', homeController.put)
exports.router('/:id', homeController.delete)