const db = require('../database/db');

module.exports = class Respuesta {
  constructor(newRespuesta) {
    this.respuesta = newRespuesta.respuesta || '';
    this.anonimo = newRespuesta.anonimo || false;
  }

  save() {
    return db.execute(
      'INSERT INTO respuesta (respuesta, anonimo) VALUES (?, ?)',
      [this.respuesta, this.anonimo]
    );
  }
};
