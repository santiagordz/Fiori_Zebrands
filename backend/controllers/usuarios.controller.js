const Usuario = require('../models/usuarios.model');
exports.fetchUsuario = async (req, res, next) => {
  try {
    const [rows] = await Usuario.fetchOne(req.user.email);
    if (rows.length === 0) {
      console.log('Usuario no encontrado');
      res.redirect('/user404');
    } else {
      const user = req.user;
      const needUpdate =
        !rows[0].nombre ||
        !rows[0].apellido ||
        !rows[0].foto ||
        !rows[0].id_usuario_google;
      if (user && needUpdate) {
        await Usuario.updateData(
          user.name.givenName,
          user.name.familyName,
          user.photos[0].value,
          user.id,
          user.email
        );
      }
      res.json(rows[0]);
      //     res.send(`
      //         <script>
      //   window.opener.postMessage(${JSON.stringify({
      //     ...rows[0],
      //     type: 'user',
      //   })}, "http://localhost:3000/");
      //   window.close();
      // </script>
      //       `);
    }
  } catch (err) {
    console.log(err);
  }
};
