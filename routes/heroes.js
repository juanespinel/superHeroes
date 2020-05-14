const express = require('express');
const router = express.Router();

const heroesController = require('../controllers/heroesController')

router.get('/', heroesController.listar);
router.get('/detalle/:idHeroe', heroesController.detalle);
router.get('/bio/:idHereo/ok?');

module.exports = router;