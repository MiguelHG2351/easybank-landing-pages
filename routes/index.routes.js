const express = require('express')
const router = express.Router()
const controllers = require('../controllers/index.controller')

router.get('/', controllers.home)
router.get('/about', controllers.about)

module.exports = router