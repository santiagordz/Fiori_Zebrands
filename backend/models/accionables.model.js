const db = require("../database/db");

module.exports = class Accionable {
  constructor(newAccionable) {
    this.id = newAccionable.id || null;
    this.id_usuario = newAccionable.id_usuario || null;
    this.accionable = newAccionable.accionable || null; // Cambia 'descripcion' a 'accionable'
    this.fecha = newAccionable.fecha || null;
  }

  static fetchAll() {
    return db.execute("SELECT * FROM accionables");
  }

  static createAccionable(id_usuario, accionable, fecha) {
    return db.execute(
      `
          INSERT INTO accionables (id_usuario, accionable, fecha)
          VALUES (?, ?, ?)
              `,
      [id_usuario, accionable, fecha]
    );
  }

  static getAccionablesByUserId(id_usuario) {
    return db.execute(
      `
        SELECT fecha, accionable FROM accionables
        WHERE id_usuario = ?
      `,
      [id_usuario]
    );
  }

  static deleteAccionable(id) {
    return db.execute(
      `
        DELETE FROM accionables
        WHERE id = ?
          `,
      [id]
    );
  }
};
