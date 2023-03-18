const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

router.get('/roles', usuariosController.getUsuariosConRoles);
router.get('/', usuariosController.getUsuarios);

module.exports = router;
