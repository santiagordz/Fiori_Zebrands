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
    SELECT r.*, ur.id_usuario, ur.completada, IF(ur.id_usuario IS NOT NULL, 1, 0) as asignada, r.en_curso, COUNT(DISTINCT res.id_sesionRespuesta) AS num_respuestas
    FROM retrospectivas r
    LEFT JOIN usuarios_retrospectivas ur ON r.id = ur.id_retrospectiva AND ur.id_usuario = ?
    LEFT JOIN respuestas res ON r.id = res.id_retrospectiva
    GROUP BY r.id, ur.id_usuario, ur.completada, asignada, r.en_curso;
    `,
      [userId]
    );
  }
  static async fetchDetailedRetrospective(id_retrospectiva) {
    const [[retrospective]] = await db.execute(
      `SELECT id, titulo, descripcion, fecha_inicio, fecha_fin, en_curso
      FROM retrospectivas
      WHERE id = ?`,
      [id_retrospectiva]
    );

    if (!retrospective) {
      throw new Error('Retrospectiva no encontrada');
    }

    const [respuestas] = await db.execute(
      `SELECT R.respuesta, R.anonimo, R.id_usuario, R.id_pregunta,
        IF(R.id_usuario IS NOT NULL, U.nombre, 'Usuario anónimo') AS nombre
        FROM respuestas AS R
        LEFT JOIN usuarios AS U ON R.id_usuario = U.id
        WHERE R.id_retrospectiva = ?;`,
      [id_retrospectiva]
    );

    const [preguntas] = await db.execute(
      `SELECT P.id, P.pregunta, P.id_tipo_pregunta
      FROM preguntas AS P
      INNER JOIN preguntas_retrospectivas AS PR ON PR.id_pregunta = P.id
      WHERE PR.id_retrospectiva = ?`,
      [id_retrospectiva]
    );

    for (const pregunta of preguntas) {
      if (pregunta.id_tipo_pregunta === 3) {
        const [opciones] = await db.execute(
          `SELECT OP.id, OP.opcion_respuesta
          FROM opciones_respuestas AS OP
          INNER JOIN preguntas_opciones AS PO ON PO.id_opcion = OP.id
          WHERE PO.id_pregunta = ?`,
          [pregunta.id]
        );
        pregunta.opciones = opciones;
      }
    }

    const [tags] = await db.execute(
      `
    SELECT E.id, E.etiqueta, E.id_color, C.color
    FROM etiquetas AS E
    INNER JOIN colores AS C ON E.id_color = C.id
    INNER JOIN retrospectiva_etiquetas AS RE ON RE.id_etiqueta = E.id
    WHERE RE.id_retrospectiva = ?;
    `,
      [id_retrospectiva]
    );

    const [[numTotalRespuestas]] = await db.execute(
      `SELECT COUNT(DISTINCT id_sesionRespuesta) AS num_respuestas
      FROM respuestas
      WHERE id_retrospectiva = ?`,
      [id_retrospectiva]
    );

    const detailedRetrospective = {
      ...retrospective,
      respuestas,
      preguntas,
      tags,
      num_respuestas: numTotalRespuestas.num_respuestas,
    };

    return detailedRetrospective;
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
      `UPDATE retrospectivas SET en_curso = 0, fecha_fin = CURTIME() WHERE id = ?`,
      [id_retrospectiva]
    );
  }

  static async newRetrospectiva(Retrospectiva) {
    const connection = await db.getConnection();
    await connection.beginTransaction();

    try {
      await connection.execute(
        `
      INSERT INTO retrospectivas (id, titulo, descripcion) VALUES (?, ?, ?)`,
        [
          Retrospectiva.id,
          Retrospectiva.titulo,
          Retrospectiva.descripcion,
        ]
      );

      for (const pregunta of Retrospectiva.predeterminadas) {
        await connection.execute(
          `INSERT INTO preguntas_retrospectivas (id, id_pregunta, id_retrospectiva) VALUES (NULL, ?, ?);`,
          [pregunta.id, Retrospectiva.id]
        );
        await connection.execute(
          'UPDATE preguntas SET predeterminada = 1 WHERE id = ?',
          [pregunta.id]
        );
      }

      for (const pregunta of Retrospectiva.otras) {
        await connection.execute(
          'UPDATE preguntas SET predeterminada = 0 WHERE id = ?',
          [pregunta.id]
        );
      }

      for (const usuario of Retrospectiva.usuarios) {
        await connection.execute(
          `INSERT INTO usuarios_retrospectivas (id_usuario, id_retrospectiva) VALUES (?,?)`,
          [usuario.id, Retrospectiva.id]
        );
      }

      for (const etiqueta of Retrospectiva.etiquetas) {
        const [usuariosEtiqueta] = await connection.execute(
          `SELECT id_usuario FROM usuarios_etiquetas WHERE id_etiqueta = ?`,
          [Number(etiqueta.id)]
        );

        for (const { id_usuario } of usuariosEtiqueta) {
          await connection.execute(
            'INSERT INTO usuarios_retrospectivas (id_retrospectiva, id_usuario) VALUES(?,?)',
            [Retrospectiva.id, id_usuario]
          );
        }
      }
      await connection.commit();
    } catch (error) {
      connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  static async deleteRetrospectiva(id_retrospectiva) {
    const connection = await db.getConnection();
    await connection.beginTransaction();

    try {
      await connection.execute(
        `DELETE FROM usuarios_retrospectivas WHERE id_retrospectiva = ?`,
        [id_retrospectiva]
      );
      await connection.execute(
        `DELETE FROM preguntas_retrospectivas WHERE id_retrospectiva = ?`,
        [id_retrospectiva]
      );
      await connection.execute(
        `DELETE FROM retrospectiva_etiquetas WHERE id_retrospectiva = ?`,
        [id_retrospectiva]
      );
      await connection.execute(
        `DELETE FROM retrospectivas WHERE id = ?`,
        [id_retrospectiva]
      );
      await connection.commit();
    } catch (error) {
      connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }
};
