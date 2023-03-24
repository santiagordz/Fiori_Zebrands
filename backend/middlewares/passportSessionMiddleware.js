require('dotenv').config();
const cookieSession = require('cookie-session');

const passportSessionMiddleware = (req, res, next) => {
  const session = cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_KEY_1, process.env.COOKIE_KEY_2],
    maxAge: 24 * 60 * 60 * 1000,
  });

  session(req, res, () => {
    const sessionUser =
      req.session &&
      req.session.passport &&
      req.session.passport.user;
    if (sessionUser) {
      req.user = sessionUser;
    }
    next();
  });
};

module.exports = passportSessionMiddleware;
