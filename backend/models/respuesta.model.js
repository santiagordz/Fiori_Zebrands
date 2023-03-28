const db = require('../database/db');

module.exports = class Respuesta {
  constructor(newRespuesta) {
    this.respuesta = newRespuesta.respuesta || '';
    this.anonimo = newRespuesta.anonimo || false;
    this.id_usuario = newRespuesta.id_usuario || null;
    this.id_retrospectiva = newRespuesta.id_retrospectiva || null;
    this.id_pregunta = newRespuesta.id_pregunta || null;
    this.id_sesionRespuesta = newRespuesta.id_sesionRespuesta || null;
  }

  save() {
    return db.execute(
      'INSERT INTO respuestas (respuesta, anonimo, id_usuario, id_retrospectiva, id_pregunta, id_sesionRespuesta, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, CURTIME(), CURTIME())',
      [
        this.respuesta,
        this.anonimo,
        this.id_usuario,
        this.id_retrospectiva,
        this.id_pregunta,
        this.id_sesionRespuesta,
      ]
    );
  }

  static fetchById_sesionRespuesta(id_sesionRespuesta) {
    return db.execute(
      'SELECT respuesta, anonimo, id_usuario, id_pregunta FROM respuestas WHERE id_sesionRespuesta = ?',
      [id_sesionRespuesta]
    );
  }
};
