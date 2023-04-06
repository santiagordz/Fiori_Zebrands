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

  static async registrarPregunta(newPregunta) {
    let options = null;
    if (newPregunta.opciones !== null) {
      options = newPregunta.opciones.split(',');
    }
    const connection = await db.getConnection();
    await connection.beginTransaction();

    try {
      await connection.execute(
        `INSERT INTO preguntas(id, pregunta, predeterminada, id_tipo_pregunta)
        VALUES (?, ?, ?, ?)`,
        [
          newPregunta.id,
          newPregunta.pregunta,
          newPregunta.predeterminada,
          newPregunta.id_tipo_pregunta,
        ]
      );

      if (newPregunta.id_tipo_pregunta === 3 && options) {
        for (const opcion of options) {
          await connection.execute(
            `INSERT INTO opciones_respuestas(opcion_respuesta)
            VALUES (?)`,
            [opcion]
          );

          await connection.execute(
            `INSERT INTO preguntas_opciones(id_pregunta, id_opcion)
            VALUES (?, LAST_INSERT_ID())`,
            [newPregunta.id]
          );
        }
      }

      await connection.commit();
      return {
        message: 'Pregunta creada exitosamente',
        id: newPregunta.id,
      };
    } catch (e) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  static async eliminarPreguntaById(id_pregunta) {
    const connection = await db.getConnection();
    await connection.beginTransaction();
    try {
      const [[id_tipo_pregunta]] = await connection.execute(
        `SELECT id_tipo_pregunta FROM preguntas WHERE id = ?`,
        [id_pregunta]
      );

      await connection.execute(
        `DELETE FROM respuestas WHERE id_pregunta = ?`,
        [id_pregunta]
      );

      if (id_tipo_pregunta.id_tipo_pregunta === 3) {
        await connection.execute(
          `DELETE FROM opciones_respuestas
          WHERE id IN (
              SELECT id_opcion
              FROM preguntas_opciones
              WHERE id_pregunta = ?
          )`,
          [id_pregunta]
        );
      }

      await connection.execute(`DELETE FROM preguntas WHERE id = ?`, [
        id_pregunta,
      ]);

      await connection.commit();
      return {
        message: 'Pregunta eliminada exitosamente',
        id: id_pregunta,
      };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  static async updatePreguntaById(Pregunta) {
    let options = null;
    if (Pregunta.opciones !== null) {
      options = Pregunta.opciones.split(',');
    }
    const connection = await db.getConnection();
    await connection.beginTransaction();
    try {
      const [[prevData]] = await connection.execute(
        `  SELECT id_tipo_pregunta as prevIdTipo, GROUP_CONCAT(opciones_respuestas.opcion_respuesta) as prevOpciones
    FROM preguntas
    LEFT JOIN preguntas_opciones ON preguntas.id = preguntas_opciones.id_pregunta
    LEFT JOIN opciones_respuestas ON preguntas_opciones.id_opcion = opciones_respuestas.id
    WHERE preguntas.id = ?
    GROUP BY preguntas.id;`,
        [Pregunta.id]
      );

      await connection.execute(
        `UPDATE preguntas SET pregunta = ?, predeterminada = ?, id_tipo_pregunta = ? WHERE id = ?`,
        [
          Pregunta.pregunta,
          Pregunta.predeterminada,
          Pregunta.id_tipo_pregunta,
          Pregunta.id,
        ]
      );

      if (
        prevData.prevIdTipo === 3 &&
        prevData.prevOpciones !== Pregunta.opciones
      ) {
        await connection.execute(
          `DELETE FROM opciones_respuestas
        WHERE id IN (
            SELECT id_opcion
            FROM preguntas_opciones
            WHERE id_pregunta = ?
        )`,
          [Pregunta.id]
        );
      }

      if (Pregunta.id_tipo_pregunta === 3 && options) {
        for (const opcion of options) {
          await connection.execute(
            `INSERT INTO opciones_respuestas(opcion_respuesta)
            VALUES (?)`,
            [opcion]
          );

          await connection.execute(
            `INSERT INTO preguntas_opciones(id_pregunta, id_opcion)
            VALUES (?, LAST_INSERT_ID())`,
            [Pregunta.id]
          );
        }
      }

      await connection.commit();
      return {
        message: 'Pregunta editada exitosamente',
        id: Pregunta.id,
      };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }
};
