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

  static guardarAccionable(id_usuario, descripcion, fecha, completada) {
    return db.execute(
      `
          INSERT INTO accionables (id_usuario, descripcion, fecha, completada)
          VALUES (?, ?, ?, ?)
              `,
      [id_usuario, descripcion, fecha, completada]
    );
  }
};
