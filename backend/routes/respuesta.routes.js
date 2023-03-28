const express = require('express');
const router = express.Router();
const respuestaController = require('../controllers/respuesta.controller');

router.post('/new', respuestaController.nuevaRespuesta);
router.get(
  '/:id_sesionRespuesta',
  respuestaController.getRespuestaById_sesionRespuesta
);

module.exports = router;
