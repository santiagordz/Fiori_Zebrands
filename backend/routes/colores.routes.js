const ColoresController = require('../controllers/colores.controller');
const express = require('express');
const router = express.Router();

router.get('/', ColoresController.getColores);

module.exports = router;
