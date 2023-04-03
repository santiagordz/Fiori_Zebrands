const express = require('express');
const router = express.Router();
const preguntaController = require('../controllers/pregunta.controller');

router.get('/', preguntaController.getAllPreguntas);

module.exports = router;
