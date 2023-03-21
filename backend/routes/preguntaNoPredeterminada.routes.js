const express = require('express');
const router = express.Router();
const preguntaController = require('../controllers/preguntaNoPredeterminada.controller');

router.get('/', preguntaController.getPregunta);

module.exports = router;