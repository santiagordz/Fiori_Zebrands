const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

router.get('/roles', usuariosController.getUsuariosConRoles);
router.get('/etiquetas', usuariosController.getUsuariosConEtiquetas);
router.get(
  '/roles-etiquetas',
  usuariosController.getUsuariosRolEtiqueta
);
router.get('/', usuariosController.getUsuarios);

module.exports = router;
