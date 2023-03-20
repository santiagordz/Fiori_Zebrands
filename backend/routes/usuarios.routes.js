const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

router.get('/info', usuariosController.fetchUsuarios);
router.post('/createUser', usuariosController.createUsuario);

module.exports = router;
