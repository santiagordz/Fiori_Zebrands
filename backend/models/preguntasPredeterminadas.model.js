const db = require('../database/db');

module.exports = class PreguntasPredeterminadas {
  constructor(PreguntasPredeterminadas) {
    this.id_pregunta = PreguntasPredeterminadas.id_pregunta || null;
    this.pregunta = PreguntasPredeterminadas.pregunta || null;
    this.predeterminada = PreguntasPredeterminadas.predeterminada || 0;
    this.id_tipo_pregunta = PreguntasPredeterminadas.id_tipo_pregunta || null;
  }

  static getAllPreguntasPredeterminadas() {
    return db.execute('SELECT * FROM `pregunta` WHERE predeterminada = 1;');
  }
};