const express = require('express');
const router = express.Router();
const tipoPreguntaController = require('../controllers/tipoPregunta.controller');

router.get('/', tipoPreguntaController.getTipoPregunta);

module.exports = router;