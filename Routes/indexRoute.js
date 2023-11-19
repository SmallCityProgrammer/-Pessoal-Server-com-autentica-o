const express = require('express')
const router = express.Router();
const homeController = require('../Controllers/homeController')
const authService = require("../Service/authService")

router.get('/', homeController.get)
router.get('/:id', homeController.getById)
router.post('/', authService.authorize, homeController.post)
router.put('/:id', homeController.put)
router.delete('/:id', homeController.delete)

module.exports = router;