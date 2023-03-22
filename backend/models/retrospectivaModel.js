const db = require('../database/db');

module.exports = class Retrospectiva {
  constructor(newRetrospectiva) {
    this.id_retrospectiva = newRetrospectiva.id_retrospectiva || null;
    this.titulo = newRetrospectiva.titulo || '';
    this.fecha_inicio = newRetrospectiva.fecha_inicio || '';
    this.fecha_fin = newRetrospectiva.fecha_fin || '';
    this.id_reporte = newRetrospectiva.id_reporte || null;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM retrospectiva');
  }

  static fetchPanelRetros() {
    return db.execute(
      'SELECT id_retrospectiva, titulo, fecha_inicio, fecha_fin FROM `retrospectiva`;'
    );
  }
};
