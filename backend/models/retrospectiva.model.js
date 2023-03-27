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
      'SELECT id, titulo, fecha_inicio, fecha_fin, descripcion, id_reporte, updatedAt, createdAt FROM `retrospectivas` WHERE id_retrospectiva = ?;',
      [id]
    );
  }

  static fetchQuestions(id) {
    // Utilizando subconsultas
    return db.execute(
      `SELECT P.id AS id_pregunta, P.pregunta, P.id_tipo_pregunta,
       (SELECT GROUP_CONCAT(opcion_respuesta)
        FROM opciones_respuestas
        WHERE id IN (
            SELECT id_opcion
            FROM preguntas_opciones_respuestas
            WHERE id_pregunta = P.id
        )
       ) AS opciones_respuesta
FROM preguntas AS P
JOIN preguntas_retrospectivas AS PR ON P.id = PR.id_pregunta
WHERE PR.id_retrospectiva = ?
GROUP BY P.id;
      `,
      [id]
    );
  }
};
