const db = require('../database/db');

module.exports = class Preguntas {
  constructor(pregunta) {
    this.id_pregunta = pregunta.id_pregunta || null;
    this.pregunta = pregunta.pregunta || null;
    this.predeterminada = pregunta.predeterminada || 0;
    this.id_tipo_pregunta = pregunta.id_tipo_pregunta || null;
  }

  static getAllPregunta() {
    return db.execute('SELECT * FROM `pregunta` WHERE predeterminada = 0;');
  }
};