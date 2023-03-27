const db = require('../database/db');

module.exports = class Usuarios {
  constructor(usuario) {
    this.correo = usuario.correo || null;
    this.password = usuario.password || null;
    this.nombre = usuario.nombre || null;
    this.foto = usuario.foto || null;
    this.createdAt = usuario.createdAt || null;
    this.updatedAt = usuario.updatedAt || null;
    this.idRol = usuario.idRol || null;
    this.idEtiqueta = usuario.idEtiqueta || null;
  }

  static async fetchOne(correo) {
    return db.execute(
      `SELECT correo, nombre, foto, id_jira, id_rol
        FROM usuarios
        WHERE correo = ?`,
      [correo]
    );
  }

  static async updateData(nombre, foto, id_google, correo) {
    return db.execute(
      `UPDATE usuarios SET nombre = ?, foto = ?, id_google = ?, updatedAt = CURTIME() WHERE correo = ?`,
      [nombre, foto, id_google, correo]
    );
  }
};
