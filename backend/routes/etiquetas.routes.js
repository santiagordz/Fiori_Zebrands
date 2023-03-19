const express = require('express');
const router = express.Router();

const etiquetasController = require('../controllers/etiquetas.controller');

router.get('/', etiquetasController.getEtiquetas);

module.exports = router;
