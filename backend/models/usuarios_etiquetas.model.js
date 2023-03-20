const db = require('../database/db');
const Usuario = require('../models/usuarios.model');
const Etiqueta = require('../models/etiquetas.model');

module.exports = class UsuarioEtiqueta {
  constructor(usuarioEtiqueta) {
    this.id_usuario = usuarioEtiqueta.id_usuario || null;
    this.id_etiqueta = usuarioEtiqueta.id_etiqueta || null;
  }
  static createUsuarioEtiqueta(id_usuario, id_etiqueta) {
    return db.execute(
      `INSERT INTO usuarios_etiquetas (id_usuario, id_etiqueta) VALUES (?, ?)`,
      [id_usuario, id_etiqueta]
    );
  }
};
