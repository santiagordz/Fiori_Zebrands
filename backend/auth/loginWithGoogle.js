const express = require('express');
const passport = require('passport');
const router = express.Router();
const isAuth = require('../utils/is-auth');

const successRedirect = 'http://localhost:3000/login/success';
const errorRedirect = 'http://localhost:3000/login/error';

router.get(
  '/login/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureMessage: 'Failed to authenticate with Google',
    failureRedirect: errorRedirect,
    successRedirect: successRedirect,
  }),
  (req, res) => {
    // console.log('User: ', req.user);
    res.send('You have successfully logged in with Google');
  }
);

module.exports = router;
