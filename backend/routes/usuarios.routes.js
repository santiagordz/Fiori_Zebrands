const express = require('express');
const router = express.Router();
const isAuth = require('../utils/is-auth');
const usuariosController = require('../controllers/usuarios.controller');

router.get('/auth', isAuth, async (req, res, next) => {
  res.json(req.user);
});

module.exports = router;
