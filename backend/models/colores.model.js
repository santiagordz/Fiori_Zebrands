const db = require('../database/db');

module.exports = class Colores {
  constructor(colores) {
    this.id = colores.id;
    this.color = colores.color;
  }

  static getColores() {
    return db.execute(`SELECT * FROM colores`);
  }
};
