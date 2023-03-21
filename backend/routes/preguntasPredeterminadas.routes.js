const express = require('express');
const router = express.Router();
const preguntasPredeterminadas = require('../controllers/preguntasPredeterminadas.controller');

router.get('/', preguntasPredeterminadas.getPreguntasPredeterminadas);

module.exports = router;