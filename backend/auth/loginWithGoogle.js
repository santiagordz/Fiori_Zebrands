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
    try {
      res.send('You have successfully logged in with Google');
    } catch (err) {
      if (err.message === 'USER_NOT_FOUND') {
        res.status(401).json({ error: 'User not found in database' });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  }
);

module.exports = router;
