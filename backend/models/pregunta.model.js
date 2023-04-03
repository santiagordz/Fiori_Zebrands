const db = require('../database/db');

module.exports = class Pregunta {
  constructor(newPregunta) {
    this.id = newPregunta.id || null;
    this.pregunta = newPregunta.pregunta || '';
    this.predeterminada = newPregunta.predeterminada || false;
    this.id_tipo_pregunta = newPregunta.id_tipo_pregunta || null;
  }

  static fetchAll() {
    return db.execute(
      `SELECT id, pregunta, predeterminada, id_tipo_pregunta FROM preguntas`
    );
  }
};
