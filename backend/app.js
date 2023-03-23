const express = require('express');
const cors = require('cors');
require('dotenv').config();
const retrospectivaRoutes = require('./routes/retrospectivas.routes');
const cookieSession = require('cookie-session');
const isAuth = require('./utils/is-auth');
const passport = require('passport');
const session = require('express-session');

const app = express();

require('./passport');
app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: 'Our little secret.',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/retrospectivas', retrospectivaRoutes);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });


app.use(
  cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2'],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.json({ message: 'You are not logged in' });
});

app.get('/failed', (req, res) => {
  res.send('Failed');
});

app.get('/success', isAuth, (req, res) => {
  res.send(`Welcome ${req.user.email}`);
});

app.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

app.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failed',
  }),
  function (req, res) {
    res.redirect('/success');
  }
);

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
