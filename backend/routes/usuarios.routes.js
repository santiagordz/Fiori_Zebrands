const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');
const isAuth = require('../utils/is-auth');

router.get('/auth', isAuth, async (req, res, next) => {
  res.json(req.user);
});

router.get('/info/one/:id', usuariosController.fetchUsuarioById);
router.get('/info', usuariosController.fetchUsuarios);
router.post('/createUser', usuariosController.createUsuario);
router.delete(
  '/deleteUser/:id',
  usuariosController.deleteUsuarioById
);
router.post('/updateUser/:id', usuariosController.updateUsuarioById);
router.post(
  '/updateUserRole/:id',
  usuariosController.updateRolUsuarioById
);

module.exports = router;
