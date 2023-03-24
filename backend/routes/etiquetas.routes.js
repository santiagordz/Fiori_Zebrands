const express = require('express');
const router = express.Router();

const etiquetasController = require('../controllers/etiquetas.controller');

router.get('/:id', etiquetasController.getEtiquetaById);
router.put('/:id', etiquetasController.updateEtiqueta);
router.post('/', etiquetasController.createEtiqueta);
router.get('/', etiquetasController.getEtiquetas);

module.exports = router;
