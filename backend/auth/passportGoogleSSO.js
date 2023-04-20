const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const Usuario = require('../models/usuarios.model');

const GOOGLE_CALLBACK_URI =
  'http://localhost:8001/auth/google/callback';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URI,
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, cb) => {
      const user = await Usuario.fetchOne(profile.email).catch(
        (err) => {
          console.log(err);
          cb(err, null);
        }
      );

      const userExists = user && user[0][0];

      if (userExists) {
        const needUpdate =
          !userExists.nombre ||
          !userExists.foto ||
          !userExists.id_google;

        if (needUpdate) {
          try {
            await Usuario.updateData(
              userExists.nombre
                ? userExists.nombre
                : profile.displayName,
              profile.photos[0].value,
              profile.id,
              profile.email
            );
            userExists.nombre = profile.displayName;
            userExists.foto = profile.photos[0].value;
            userExists.id_usuario_google = profile.id;
          } catch (err) {
            console.log(err);
            cb(null, err);
            return;
          }
        }

        return cb(null, userExists);
      } else {
        return cb(null, false, { message: 'User not registered' });
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  // console.log(`\n--------> Serialize User:`, user);

  if (user) cb(null, user.correo);
});

passport.deserializeUser(async (correo, cb) => {
  const user = await Usuario.fetchOne(correo).catch((err) => {
    console.log(err);
    cb(err, null);
  });

  if (user) cb(null, user[0][0]);
});
