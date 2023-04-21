const express = require('express');
const passport = require('passport');
const router = express.Router();
const isAuth = require('../utils/is-auth');

const successRedirect = 'http://padawan-2.laing.mx/login/success';
const errorRedirect = 'http://padawan-2.laing.mx/login/error';

router.get(
  '/login/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/auth/google/callback',
  (req, res, next) => {
    passport.authenticate('google', (err, user, info) => {
      if (err) {
        req.session.error = 'Failed to authenticate with Google';
        return res.redirect(errorRedirect);
      }
      if (!user) {
        if (info.message === 'User not registered') {
          return res.send(`
      <script>
        window.opener.postMessage({ error: 'User not registered' }, '*');
        window.close();
      </script>
    `);
        }
        return res.send(`
    <script>
      window.opener.postMessage({ error: 'Failed to authenticate with Google' }, '*');
      window.close();
    </script>
  `);
      }

      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        return res.redirect(successRedirect);
      });
    })(req, res, next);
  },
  (req, res) => {
    res.send('You have successfully logged in with Google');
  }
);

module.exports = router;
