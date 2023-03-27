const db = require('../database/db');

module.exports = class Roles {
  constructor(rol) {
    this.rol = rol.rol || null;
  }
  static getAllRoles() {
    return db.execute('SELECT * FROM roles');
  }
  static getRolById(id) {
    return db.execute('SELECT * FROM roles WHERE id = ?', [id]);
  }
};
