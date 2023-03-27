const Colores = require('../models/colores.model');

exports.getColores = (req, res, next) => {
  Colores.getColores()
    .then(([rows, fieldData]) => {
      res.json(rows);
    })
    .catch((err) => console.log(err));
};
