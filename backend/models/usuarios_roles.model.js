const db = require('../database/db');
const Usuario = require('./usuarios.model');
const Rol = require('./roles.model');

module.exports = class UsuariosRoles {
  constructor(usuariosRoles) {
    this.usuarioId = usuariosRoles.usuarioId || null;
    this.rolId = usuariosRoles.rolId || null;
  }
  static createUsuarioRol(usuarioId, rolId) {
    return db.execute(
      'INSERT INTO usuarios_roles (id_usuario, id_rol) VALUES (?, ?)',
      [usuarioId, rolId]
    );
  }
};
