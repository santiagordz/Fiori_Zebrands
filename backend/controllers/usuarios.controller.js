const Usuario = require('../models/usuarios.model');
const Rol = require('../models/roles.model');
const Etiqueta = require('../models/etiquetas.model');
const UsuarioEtiqueta = require('../models/usuarios_etiquetas.model');
const UsuarioRol = require('../models/usuarios_roles.model');

exports.fetchUsuarios = async (req, res, next) => {
  try {
    const usuarios = await Usuario.fetchUsuarios();
    res.json({ usuarios });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error al obtener los usuarios.' });
  }
};

exports.fetchUsuarioById = async (req, res, next) => {
  const usuarioId = req.params.id;
  try {
    const usuario = await Usuario.fetchUsuarioById(usuarioId);
    res.json({ usuario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el usuario.' });
  }
};

exports.createUsuario = async (req, res, next) => {
  const { correo, rol, etiquetas } = req.body;
  try {
    const usuario = await Usuario.createUsuario(correo);
    const rolObj = await Rol.getRolById(rol);
    const rolObjeto = rolObj[0][0];
    await UsuarioRol.createUsuarioRol(usuario.id, rolObjeto.id);
    for (let etiqueta of etiquetas) {
      const etiquetaObj = await Etiqueta.getEtiquetaById(etiqueta);
      const etiquetaObjeto = etiquetaObj[0][0];
      await UsuarioEtiqueta.createUsuarioEtiqueta(
        usuario.id,
        etiquetaObjeto.id
      );
    }
    res.json({ message: 'Usuario creado correctamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el usuario.' });
  }
};

exports.deleteUsuarioById = async (req, res, next) => {
  const usuarioId = req.params.id;
  try {
    await Usuario.deleteUsuarioById(usuarioId);
    res.json({ message: 'Usuario eliminado correctamente.' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error al eliminar el usuario.' });
  }
};
