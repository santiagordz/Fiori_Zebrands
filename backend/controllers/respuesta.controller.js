const Respuesta = require('../models/respuesta.model');

exports.nuevaRespuesta = (req, res, next) => {
  const respuesta = new Respuesta({
    respuesta: req.body.respuesta,
    anonimo: req.body.anonimo,
    id_usuario: req.body.id_usuario,
    id_retrospectiva: req.body.id_retrospectiva,
    id_pregunta: req.body.id_pregunta,
    id_sesionRespuesta: req.body.id_sesionRespuesta,
  });

  respuesta.save();
};

exports.getRespuestaById_sesionRespuesta = async (req, res, next) => {
  const id_sesionRespuesta = req.params.id_sesionRespuesta;
  try {
    const [rows] = await Respuesta.fetchById_sesionRespuesta(
      id_sesionRespuesta
    );
    if (rows.length > 0) {
      res.json(rows);
    }
  } catch (err) {
    console.error(err);
  }
};
