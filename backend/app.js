require('dotenv').config();
require('./auth/passportGoogleSSO');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const authRoutes = require('./auth/index');
const cookieSession = require('cookie-session');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URI,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'Accept',
    ],
  })
);

app.use(express.json());

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    keys: [process.env.COOKIE_KEY_1, process.env.COOKIE_KEY_2],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res, next) => {
  res.json({ message: 'Fiori' });
});

app.use(authRoutes);

app.use((err, req, res, next) => {
  if (err.message === 'UserNotFound') {
    req.session.destroy();
    res.redirect('/');
  } else {
    next(err);
  }
});

const retrospectivaRoutes = require('./routes/retrospectivas.routes');
const respuestaRoutes = require('./routes/respuesta.routes');
const usuariosRoutes = require('./routes/usuarios.routes');
const preguntaRoutes = require('./routes/preguntas.routes');
const rolesRoutes = require('./routes/roles.routes');
const etiquetasRoutes = require('./routes/etiquetas.routes');
const coloresRoutes = require('./routes/colores.routes');
const usuariosJiraRoutes = require('./routes/usuarios_jira.routes');
const issuesJiraRoutes = require('./routes/issuesJira.routes');
const sprintsJiraRoutes = require('./routes/sprints.routes');
const epicJiraRoutes = require('./routes/epicsJira.routes');
const metricasRoutes = require('./routes/metricas.routes');

//Rutas para Deploy en AWS

app.use('/usuarios', usuariosRoutes);
app.use('/usuarios_jira', usuariosJiraRoutes);
app.use('/roles', rolesRoutes);
app.use('/etiquetas', etiquetasRoutes);
app.use('/colores', coloresRoutes);
app.use('/user', usuariosRoutes);
app.use('/retrospectivas', retrospectivaRoutes);
app.use('/respuesta', respuestaRoutes);
app.use('/issues', issuesJiraRoutes);
app.use('/sprints', sprintsJiraRoutes);
app.use('/epics', epicJiraRoutes);
app.use('/metricas', metricasRoutes);

app.use('/issuesjira', issuesJiraRoutes);
app.use('/preguntas', preguntaRoutes);

app.get('/logout', (req, res) => {
  req.logout();
  res.clearCookie('connect.sid');
  res.redirect('/');
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
