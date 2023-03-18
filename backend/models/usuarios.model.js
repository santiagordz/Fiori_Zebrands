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
          (SELECT id_usuario, MIN(id_rol) AS max_id_rol
          FROM usuarios_roles
          GROUP BY id_usuario)
      GROUP BY u.id
      `
    );
  }

  static getUsuariosConEtiquetas() {
    return db.execute(
      `
      SELECT u.*, e.etiqueta
      FROM usuarios u, etiquetas e, usuarios_etiquetas ue
      WHERE u.id = ue.id_usuario AND ue.id_etiqueta = e.id
      AND (u.id, ue.id_etiqueta) IN
          (SELECT id_usuario, MIN(id_etiqueta) AS max_id_etiqueta
          FROM usuarios_etiquetas
          GROUP BY id_usuario)
      GROUP BY u.id
      `
    );
  }

  static getUsuariosRolEtiqueta() {
    return db.execute(
      `
      SELECT u.*, r.rol, e.etiqueta
      FROM usuarios u, roles r, etiquetas e, usuarios_roles ur, usuarios_etiquetas ue
      WHERE u.id = ur.id_usuario AND r.id = ur.id_rol AND u.id = ue.id_usuario AND ue.id_etiqueta = e.id
      AND (u.id, ur.id_rol) IN 
          (SELECT id_usuario, MIN(id_rol) AS max_id_rol
          FROM usuarios_roles
          GROUP BY id_usuario)
      AND (u.id, ue.id_etiqueta) IN
          (SELECT id_usuario, MIN(id_etiqueta) AS max_id_etiqueta
          FROM usuarios_etiquetas
          GROUP BY id_usuario)
      GROUP BY u.id
      `
    );
  }
};
