const express = require('express');
const Usuario = require('../models/usuarios.model');
const isAuth = require('../utils/is-auth');
const router = express.Router();

exports.fetchUsuario = async (req, res, next) => {
  try {
    const [rows] = await Usuario.fetchOne(req.user.email);
    if (rows.length > 0) {
      res.json(rows[0]);
    }
  } catch (err) {
    console.log(err);
  }
};
