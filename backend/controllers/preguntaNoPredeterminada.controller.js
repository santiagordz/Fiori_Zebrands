const Pregunta = require('../models/preguntaNoPredeterminada.model');

exports.getPregunta = (req, res, next) => {
  Pregunta.getAllPregunta()
    .then(([rows, fieldData]) => {
      res.json(rows);
    })
    .catch((err) => console.log(err));
};