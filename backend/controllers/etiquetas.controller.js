const Etiquetas = require('../models/etiquetas.model');

exports.getEtiquetas = (req, res, next) => {
  Etiquetas.getEtiquetas()
    .then(([rows, fieldData]) => {
      res.json(rows);
    })
    .catch((err) => console.log(err));
};
