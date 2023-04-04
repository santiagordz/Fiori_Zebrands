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
      `SELECT P.id, P.pregunta, P.id_tipo_pregunta, P.predeterminada,
          (SELECT GROUP_CONCAT(OP.opcion_respuesta) FROM opciones_respuestas as OP
            WHERE OP.id IN (SELECT id_opcion FROM preguntas_opciones WHERE id_pregunta = P.id)
          ) as opciones
        FROM preguntas as P;`
    );
  }

  static registrarPregunta(newPregunta) {
    const {
      id_pregunta,
      pregunta,
      predeterminada,
      id_tipo_pregunta,
      opciones_respuesta,
    } = newPregunta;
    const opciones = opciones_respuesta ? opciones_respuesta : '';
    return db.execute('CALL InsertPregunta(?, ?, ?, ?, ?)', [
      id_pregunta,
      pregunta,
      predeterminada,
      id_tipo_pregunta,
      opciones,
    ]);
  }

  static eliminarPreguntaById(id_pregunta) {
    return db.execute('CALL DeletePregunta(?)', [id_pregunta]);
  }
};
