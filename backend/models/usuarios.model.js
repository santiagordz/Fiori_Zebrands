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

  static async createUsuario(correo) {
    const [result] = await db.execute(
      `INSERT INTO usuarios (correo) VALUES (?)`,
      [correo]
    );
    const usuarioId = result.insertId;
    return { id: usuarioId, correo };
  }

  static async fetchUsuarios() {
    const [rows] = await db.execute(`
    SELECT 
      u.id, 
      u.nombre, 
      u.correo, 
      u.foto, 
      u.rol,
      GROUP_CONCAT(DISTINCT CONCAT_WS(':', e.etiqueta, c.color) SEPARATOR ';') AS etiquetas
    FROM usuarios u
    LEFT JOIN usuarios_etiquetas ue ON u.id = ue.id_usuario
    LEFT JOIN etiquetas e ON e.id = ue.id_etiqueta
    LEFT JOIN colores c ON e.id_color = c.id
    GROUP BY u.id;
  `);

    const usuarios = rows.map((row) => {
      const etiquetas = row.etiquetas
        ? row.etiquetas.split(';').map((etiqueta) => {
            const [nombre, color] = etiqueta.split(':');
            return { nombre, color };
          })
        : [];

      return {
        id: row.id,
        nombre: row.nombre,
        correo: row.correo,
        foto: row.foto,
        rol: row.rol,
        etiquetas,
      };
    });

    return usuarios;
  }

  static async fetchUsuarioById(id) {
    const [rows] = await db.execute(
      `
    SELECT 
      u.id, 
      u.nombre, 
      u.correo, 
      u.foto, 
      u.rol,
      GROUP_CONCAT(DISTINCT CONCAT_WS(':', e.etiqueta, c.color) SEPARATOR ';') AS etiquetas
    FROM usuarios u
    
    LEFT JOIN usuarios_etiquetas ue ON u.id = ue.id_usuario
    LEFT JOIN etiquetas e ON e.id = ue.id_etiqueta
    LEFT JOIN colores c ON e.id_color = c.id
    WHERE u.id = ?
    GROUP BY u.id;
  `,
      [id]
    );

    const usuarios = rows.map((row) => {
      const etiquetas = row.etiquetas
        ? row.etiquetas.split(';').map((etiqueta) => {
            const [nombre, color] = etiqueta.split(':');
            return { nombre, color };
          })
        : [];

      return {
        id: row.id,
        nombre: row.nombre,
        correo: row.correo,
        foto: row.foto,
        rol: row.rol,
        etiquetas,
      };
    });

    return usuarios;
  }

  static async deleteUsuarioById(id) {
    const [result] = await db.execute(
      `DELETE FROM usuarios WHERE id = ?`,
      [id]
    );
    return result;
  }
};
