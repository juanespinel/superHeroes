const express = require('express');
const router = express.Router();

const creditosController = require('../controllers/creditosController')

router.get('/', creditosController);

module.exports = router;