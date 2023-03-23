const db = require('../database/db');

module.exports = class Retrospectiva {
  constructor(newRetrospectiva) {
    this.id_retrospectiva = newRetrospectiva.id_retrospectiva || null;
    this.titulo = newRetrospectiva.titulo || '';
    this.fecha_inicio = newRetrospectiva.fecha_inicio || '';
    this.fecha_fin = newRetrospectiva.fecha_fin || '';
    this.id_reporte = newRetrospectiva.id_reporte || null;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM retrospectiva');
  }

  static fetchPanelRetros() {
    return db.execute(
      'SELECT id_retrospectiva, titulo, fecha_inicio, fecha_fin FROM `retrospectiva`;'
    );
  }

  static fetchOne(id) {
    return db.execute(
      'SELECT id_retrospectiva, titulo, fecha_inicio, fecha_fin FROM `retrospectiva` WHERE id_retrospectiva = ?;',
      [id]
    );
  }

  static fetchQuestions(id) {
    return db.execute(
      `SELECT P.id_pregunta, P.pregunta, P.id_tipo_pregunta, GROUP_CONCAT(O.opcion_respuesta) AS opciones_respuesta
        FROM pregunta AS P
        JOIN respuesta_pregunta_retrospectiva AS RPR ON P.id_pregunta = RPR.id_pregunta
        LEFT JOIN opcionrespuesta_pregunta AS ORP ON P.id_pregunta = ORP.id_pregunta
        LEFT JOIN opcion_respuesta AS O ON ORP.id_opcion = O.id_opcion_respuesta
        WHERE RPR.id_retrospectiva = ?
        GROUP BY P.id_pregunta;`,
      [id]
    );
  }
};
