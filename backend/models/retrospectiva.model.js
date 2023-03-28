const db = require('../database/db');

module.exports = class Retrospectiva {
  constructor(newRetrospectiva) {
    this.id_retrospectiva = newRetrospectiva.id_retrospectiva || null;
    this.titulo = newRetrospectiva.titulo || '';
    this.descripcion = newRetrospectiva.descripcion || '';
    this.fecha_inicio = newRetrospectiva.fecha_inicio || '';
    this.fecha_fin = newRetrospectiva.fecha_fin || '';
    this.id_reporte = newRetrospectiva.id_reporte || null;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM retrospectivas');
  }

  static fetchPanelRetros() {
    return db.execute(
      'SELECT id, titulo, fecha_inicio, fecha_fin, descripcion, id_reporte, updatedAt, createdAt FROM `retrospectivas`;'
    );
  }

  static fetchOne(id) {
    return db.execute(
      'SELECT id, titulo, fecha_inicio, fecha_fin, descripcion, id_reporte, updatedAt, createdAt FROM `retrospectivas` WHERE id = ?;',
      [id]
    );
  }

  static fetchQuestions(id) {
    // Utilizando subconsultas
    return db.execute(
      `SELECT P.id, P.pregunta, P.id_tipo_pregunta,
          (SELECT GROUP_CONCAT(OP.opcion_respuesta) FROM opciones_respuestas as OP
            WHERE OP.id IN (SELECT id_opcion FROM preguntas_opciones WHERE id_pregunta = P.id)
          ) as opciones_respuestas
        FROM preguntas as P, preguntas_retrospectivas as PR WHERE P.id = PR.id_pregunta
        AND PR.id_retrospectiva = ?
        GROUP BY P.id;`,
      [id]
    );
  }
};
