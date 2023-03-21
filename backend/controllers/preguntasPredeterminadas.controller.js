const Pregunta = require('../models/preguntasPredeterminadas.model');

exports.getPreguntasPredeterminadas = (req, res, next) => {
  Pregunta.getAllPreguntasPredeterminadas()
    .then(([rows, fieldData]) => {
      res.json(rows);
    })
    .catch((err) => console.log(err));
};