const Pregunta = require('../models/pregunta.model');

exports.getAllPreguntas = async (req, res) => {
  try {
    const [preguntas] = await Pregunta.fetchAll();
    res.json(preguntas);
  } catch (err) {
    console.log(err);
  }
};
