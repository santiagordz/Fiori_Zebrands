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
      SELECT u.nombre, u.correo, u.foto, r.rol, e.etiqueta, c.color
      FROM usuarios u, roles r, etiquetas e, usuarios_roles ur, usuarios_etiquetas ue, colores c
      WHERE u.id = ur.id_usuario AND r.id = ur.id_rol AND u.id = ue.id_usuario AND ue.id_etiqueta = e.id AND e.id_color = c.id
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

  static getUsuariosInfo() {
    const [rows] = db.execute(
      `
      SELECT
      u.id,
      u.nombre,
      u.correo,
      r.rol AS rol,
        (SELECT COUNT(*)
        FROM usuarios_roles
        WHERE id_usuario = u.id) AS rolesCount,
        e.etiqueta AS etiqueta,
        c.color AS color,
        (SELECT COUNT(*)
        FROM usuarios_etiquetas
        WHERE id_usuario = u.id) AS etiquetasCount
      FROM usuarios u
      LEFT JOIN usuarios_roles ur ON u.id = ur.id_usuario
      LEFT JOIN roles r ON ur.id_rol = r.id
      LEFT JOIN usuarios_etiquetas ue ON u.id = ue.id_usuario
      LEFT JOIN etiquetas e ON ue.id_etiqueta = e.id
      LEFT JOIN colores c ON e.id_color = c.id`
    );

    const usuariosConRolesEtiquetas = rows.reduce((acc, row) => {
      if (!acc[row.id]) {
        acc[row.id] = {
          id: row.id,
          nombre: row.nombre,
          correo: row.correo,
          roles: [],
          etiquetas: [],
        };
      }
      if (row.rol && !acc[row.id].roles.includes(row.rol)) {
        acc[row.id].roles.push(row.rol);
      }
      if (
        row.etiqueta &&
        !acc[row.id].etiquetas.includes(row.etiqueta)
      ) {
        acc[row.id].etiquetas.push({
          etiqueta: row.etiqueta,
          color: row.color,
        });
      }
      console.log(acc);
      return acc;
    }, {});

    return Object.values(usuariosConRolesEtiquetas);
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
