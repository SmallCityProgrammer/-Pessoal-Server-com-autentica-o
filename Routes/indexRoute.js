const express = require('express')
const router = express.Router();
const homeController = require('../Controllers/homeController')

router.get('/', homeController.get)
router.post('/', homeController.post)
router.put('/:id', homeController.put)
router.delete('/:id', homeController.delete)

module.exports = router;