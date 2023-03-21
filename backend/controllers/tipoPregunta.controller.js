const tipoPregunta = require('../models/tipoPregunta.model');

exports.getTipoPregunta = (req, res, next) => {
    tipoPregunta.getAllTipoPregunta()
    .then(([rows, fieldData]) => {
      console.log(rows);
      res.json(rows);
    })
    .catch((err) => console.log(err));
};