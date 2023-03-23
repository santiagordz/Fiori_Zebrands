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

  static async fetchOne(correo) {
    return db.execute(`SELECT * FROM usuario WHERE correo = ?`, [
      correo,
    ]);
  }

  static async updateData(
    nombre,
    apellido,
    foto,
    id_usuario_google,
    correo
  ) {
    return db.execute(
      `UPDATE usuario SET nombre = ?, apellido = ?, foto = ?, id_usuario_google = ? WHERE correo = ?;`,
      [nombre, apellido, foto, id_usuario_google, correo]
    );
  }

  static async fetchUsuarios() {
    const [rows] = await db.execute(`
    SELECT 
      u.id, 
      u.nombre, 
      u.correo, 
      u.foto, 
      GROUP_CONCAT(DISTINCT r.rol SEPARATOR ',') AS roles, 
      GROUP_CONCAT(DISTINCT CONCAT_WS(':', e.etiqueta, c.color) SEPARATOR ';') AS etiquetas
    FROM usuarios u
    LEFT JOIN usuarios_roles ur ON u.id = ur.id_usuario
    LEFT JOIN roles r ON r.id = ur.id_rol
    LEFT JOIN usuarios_etiquetas ue ON u.id = ue.id_usuario
    LEFT JOIN etiquetas e ON e.id = ue.id_etiqueta
    LEFT JOIN colores c ON e.id_color = c.id
    GROUP BY u.id;
  `);

    const usuarios = rows.map((row) => {
      const roles = row.roles
        ? row.roles
            .split(',')
            .filter((rol) =>
              [
                'Administrador',
                'Responsable',
                'Squad Member',
              ].includes(rol)
            )
        : [];

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
        roles,
        etiquetas,
      };
    });

    return usuarios;
  }
};
