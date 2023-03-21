const db = require('../database/db');

module.exports = class tipoPreguntas {
  constructor(tipoPregunta) {
    this.id_tipo_pregunta = tipoPregunta.id_tipo_pregunta || null;
    this.tipo_pregunta = tipoPregunta.tipo_pregunta || null;
  }

  static getAllTipoPregunta() {
    return db.execute('SELECT * FROM tipo_pregunta');
  }
};