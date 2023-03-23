const express = require('express');
const cors = require('cors');
require('dotenv').config();
const isAuth = require('./utils/is-auth');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const session = require('express-session');

const usuariosRoutes = require('./routes/usuarios.routes');
const retrospectivaRoutes = require('./routes/retrospectivas.routes');
const app = express();

// require('./passport');
app.use(cors());
app.use(express.json());

app.use('/retrospectivas', retrospectivaRoutes);

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8000/auth/google/callback',
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
      // User.findOrCreate(
      //   { googleId: profile.id },
      //   function (err, user) {
      //     return done(err, user);
      //   }
      // );
    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/dashboard',
    failureRedirect: '/auth/google/failure',
  })
);

passport.serializeUser((user, done) => {
  // console.log(`\n--------> Serialize User:`);
  // console.log(user.email);

  done(null, user);
});

passport.deserializeUser((user, done) => {
  // console.log('\n--------- Deserialized User:');
  // console.log(user);

  done(null, user);
});

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });}

app.get('/', (req, res) => {
  res.json({ message: 'You are not logged in' });
});

app.get('/auth/google/failed', (req, res) => {
  res.send('Failed');
});

app.get('/user404', (req, res) => {
  req.session = null;
  res.send('User not found');
});

app.use('/auth/google/success', isAuth, usuariosRoutes);

app.get('/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
