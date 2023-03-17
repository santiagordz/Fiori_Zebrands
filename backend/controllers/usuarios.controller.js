const Usuario = require('../models/usuarios.model');

exports.getUsuarios = (req, res, next) => {
  Usuario.getAllUsuarios()
    .then(([rows, fieldData]) => {
      console.log(rows);
      res.json(rows);
    })
    .catch((err) => console.log(err));
};
