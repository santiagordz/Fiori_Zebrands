const db = require("../database/db");

module.exports = class Accionable {
  constructor(newAccionable) {
    this.id = newAccionable.id || null;
    this.id_usuario = newAccionable.id_usuario || null;
    this.descripcion = newAccionable.descripcion || null;
    this.fecha = newAccionable.fecha || null;
  }

  static fetchAll() {
    return db.execute("SELECT * FROM accionables");
  }

  static createAccionable(id_usuario, descripcion, fecha, completada) {
    return db.execute(
      `
          INSERT INTO accionables (id_usuario, descripcion, fecha, completada)
          VALUES (?, ?, ?, ?)
              `,
      [id_usuario, descripcion, fecha, completada]
    );
  }

  static getAccionableById(id) {
    return db.execute(
      `
        SELECT a.id, a.descripcion, a.fecha, AS accionable u.id
         FROM  accionables a, usuarios u WHERE u.id= ? 
        `,
      [id]
    );
  }

  static markAccionableAsCompletado(id_usuario) {
    return db.execute(
      "UPDATE accionables SET completada = 1 WHERE id_usuario = ?",
      [id_usuario]
    );
  }
};
