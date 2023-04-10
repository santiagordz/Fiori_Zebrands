const db = require('../database/db');

module.exports = class Usuario_issues {
  constructor(usuario_issues) {
    this.id_usuario = usuario_issues.id_usuario || null;
    this.id_issue = usuario_issues.id_issue || null;
  }

  static createUsuarioIssue(id_usuario, id_issue) {
    return db.execute(
      `INSERT IGNORE INTO usuarios_issues (id_usuario, id_issues) VALUES (?, ?)`,
      [id_usuario, id_issue]
    );
  }
};
