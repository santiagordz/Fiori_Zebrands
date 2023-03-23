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
    return db.execute('SELECT * FROM retrospectiva');
  }

  static fetchPanelRetros() {
    return db.execute(
      'SELECT id_retrospectiva, titulo, fecha_inicio, fecha_fin, descripcion FROM `retrospectiva`;'
    );
  }

  static fetchOne(id) {
    return db.execute(
      'SELECT id_retrospectiva, titulo, fecha_inicio, fecha_fin, descripcion FROM `retrospectiva` WHERE id_retrospectiva = ?;',
      [id]
    );
  }

  static fetchQuestions(id) {
    // Utilizando subconsultas
    return db.execute(
      `SELECT P.id_pregunta, P.pregunta, P.id_tipo_pregunta,
       (SELECT GROUP_CONCAT(opcion_respuesta)
        FROM opcion_respuesta
        WHERE id_opcion_respuesta IN (
            SELECT id_opcion
            FROM opcionrespuesta_pregunta
            WHERE id_pregunta = P.id_pregunta
        )
       ) AS opciones_respuesta
        FROM pregunta AS P
        JOIN respuesta_pregunta_retrospectiva AS RPR ON P.id_pregunta = RPR.id_pregunta
        WHERE RPR.id_retrospectiva = ?
        GROUP BY P.id_pregunta;
      `,
      [id]
    );
  }
};
