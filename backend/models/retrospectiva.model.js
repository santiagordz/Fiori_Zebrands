const db = require('../database/db');

module.exports = class Retrospectiva {
  constructor(newRetrospectiva) {
    this.id = newRetrospectiva.id || null;
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
      `SELECT Retro.id, titulo, fecha_inicio, fecha_fin, descripcion, en_curso, COUNT(DISTINCT R.id_sesionRespuesta) AS num_respuestas
        FROM retrospectivas Retro
        LEFT JOIN respuestas R ON R.id_retrospectiva = Retro.id
        GROUP BY Retro.id;`
    );
  }

  static fetchOne(id_retrospectiva, id_usuario) {
    return db.execute(
      `SELECT R.id, titulo, fecha_inicio, fecha_fin, descripcion, R.updatedAt, completada 
      FROM retrospectivas R, usuarios_retrospectivas UR
      WHERE R.id = UR.id_retrospectiva
      AND R.id = ?
      AND UR.id_usuario = ?`,
      [id_retrospectiva, id_usuario]
    );
  }

  static fetchRetrospectivasByUserId(userId) {
    return db.execute(
      `
    SELECT r.*, ur.id_usuario, ur.completada, IF(ur.id_usuario IS NOT NULL, 1, 0) as asignada, r.en_curso
    FROM retrospectivas r
    LEFT JOIN usuarios_retrospectivas ur ON r.id = ur.id_retrospectiva AND ur.id_usuario = ?
    `,
      [userId]
    );
  }

  static fetchTags(id) {
    return db.execute(
      `
    SELECT E.id, E.etiqueta, E.id_color, C.color
    FROM etiquetas AS E
    INNER JOIN colores AS C ON E.id_color = C.id
    INNER JOIN retrospectiva_etiquetas AS RE ON RE.id_etiqueta = E.id
    WHERE RE.id_retrospectiva = ?;
    `,
      [id]
    );
  }
  static fetchQuestions(id) {
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

  static finishRetrospectiva(id_retrospectiva) {
    return db.execute(
      `UPDATE retrospectivas SET en_curso = 0, fecha_fin = CURTIME(), WHERE id = ?`,
      [id_retrospectiva]
    );
  }
};
