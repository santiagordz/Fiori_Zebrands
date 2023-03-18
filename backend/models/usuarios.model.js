const db = require('../database/db');

module.exports = class Usuarios {
  constructor(usuario) {
    this.correo = usuario.correo || null;
    this.password = usuario.password || null;
    this.nombre = usuario.nombre || null;
    this.foto = usuario.foto || null;
    this.createdAt = usuario.createdAt || null;
    this.updatedAt = usuario.updatedAt || null;
  }

  static getAllUsuarios() {
    return db.execute('SELECT * FROM usuarios');
  }

  static getUsuarioById(id) {
    return db.execute('SELECT * FROM usuarios WHERE id = ?', [id]);
  }

  static getUsuarioByCorreo(correo) {
    return db.execute('SELECT * FROM usuarios WHERE correo = ?', [
      correo,
    ]);
  }

  static getUsuariosConRolesMasImportante() {
    return db.execute(
      `
      SELECT u.* , r.rol
      FROM usuarios u, roles r, usuarios_roles ur
      WHERE u.id = ur.id_usuario AND r.id = ur.id_rol
      AND (u.id, ur.id_rol) IN 
          (SELECT id_usuario, MAX(id_rol) AS max_id_rol
          FROM usuarios_roles
          GROUP BY id_usuario)
      GROUP BY u.id
      `
    );
  }
};
