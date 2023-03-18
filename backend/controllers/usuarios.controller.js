const e = require('express');
const Usuario = require('../models/usuarios.model');

exports.getUsuarios = (req, res, next) => {
  Usuario.getAllUsuarios()
    .then(([rows, fieldData]) => {
      res.json(rows);
    })
    .catch((err) => console.log(err));
};

exports.getUsuariosConRoles = (req, res, next) => {
  try {
    Usuario.getUsuariosConRolesMasImportante()
      .then(([rows, fieldData]) => {
        res.json(rows);
      })
      .catch((err) => console.log(err));
  } catch {
    res
      .status(500)
      .json({ message: 'Error al obtener los usuarios con roles' });
  }
};

exports.getUsuariosConEtiquetas = (req, res, next) => {
  try {
    Usuario.getUsuariosConEtiquetas()
      .then(([rows, fieldData]) => {
        res.json(rows);
      })
      .catch((err) => console.log(err));
  } catch {
    res.status(500).json({
      message: 'Error al obtener los usuarios con etiquetas',
    });
  }
};

exports.getUsuariosRolEtiqueta = (req, res, next) => {
  try {
    Usuario.getUsuariosRolEtiqueta()
      .then(([rows, fieldData]) => {
        res.json(rows);
      })
      .catch((err) => console.log(err));
  } catch {
    res.status(500).json({
      message: 'Error al obtener los usuarios con roles y etiquetas',
    });
  }
};
