const express = require('express');
const router = express.Router();
const respuestaController = require('../controllers/respuesta.controller');

router.post('/new', respuestaController.nuevaRespuesta);
router.get(
  '/:id_sesionRespuesta',
  respuestaController.getRespuestaById_sesionRespuesta
);
router.post(
  '/update/:id_sesionRespuesta/:id_usuario',
  respuestaController.markRetroAsCompleted
);

module.exports = router;
