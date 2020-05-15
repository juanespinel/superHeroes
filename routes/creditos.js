const express = require('express');
const router = express.Router();

const creditosController = require('../controllers/creditosController')

router.get('/', creditosController.mostrar);

module.exports = router;