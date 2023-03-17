const Usuario = require('../models/usuarios.model');

exports.getUsuarios = (req, res, next) => {
  Usuario.getAllUsuarios()
    .then(([rows, fieldData]) => {
      res.json(rows);
    })
    .catch((err) => console.log(err));
};
