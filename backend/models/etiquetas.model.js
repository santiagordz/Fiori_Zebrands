const db = require('../database/db');

module.exports = class Etiquetas {
  constructor(etiqueta) {
    this.etiqueta = etiqueta.etiqueta || null;
    this.color = etiqueta.color || null;
  }
  static getEtiquetas() {
    return db.execute(
      `
        SELECT e.id, e.etiqueta AS nombre, e.id_color, c.color
        FROM etiquetas e, colores c
        WHERE e.id_color = c.id
          `
    );
  }

  static getEtiquetaById(id) {
    return db.execute(
      `
        SELECT e.id, e.etiqueta AS nombre, e.id_color, c.color
        FROM etiquetas e, colores c
        WHERE e.id_color = c.id
          AND e.id = ?
          `,
      [id]
    );
  }

  static updateEtiqueta(id, etiqueta, color) {
    return db.execute(
      `
        UPDATE etiquetas
        SET etiqueta = ? , id_color = (SELECT id from colores WHERE colores.color = ?)
        WHERE id = ?
          `,
      [etiqueta, color, id]
    );
  }
};
