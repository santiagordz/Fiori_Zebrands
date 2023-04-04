const express = require('express');
const router = express.Router();
const preguntaController = require('../controllers/pregunta.controller');

router.get('/', preguntaController.getAllPreguntas);
router.post('/new', preguntaController.createPregunta);
router.delete('/delete/:id', preguntaController.deletePreguntaById);
router.post('/update', preguntaController.editarPreguntaById);

module.exports = router;
