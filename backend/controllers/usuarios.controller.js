const Usuario = require('../models/usuarios.model');

exports.getUsuarios = (req, res, next) => {
  Usuario.getAllUsuarios()
    .then(([rows, fieldData]) => {
      res.json(rows);
    })
    .catch((err) => console.log(err));
};

exports.fetchUsuarios = async (req, res, next) => {
  try {
    const usuarios = await Usuario.fetchUsuarios();
    res.json({ usuarios });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error al obtener los usuarios.' });
  }
};
