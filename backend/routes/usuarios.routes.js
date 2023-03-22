const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

router.get('/info/:id', usuariosController.fetchUsuarioById);
router.get('/info', usuariosController.fetchUsuarios);
router.post('/createUser', usuariosController.createUsuario);
router.delete(
  '/deleteUser/:id',
  usuariosController.deleteUsuarioById
);
router.post('/updateUser/:id', usuariosController.updateUsuarioById);

module.exports = router;
