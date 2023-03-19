const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const usuariosRoutes = require('./routes/usuarios.routes');
const rolesRoutes = require('./routes/roles.routes');

app.use('/usuarios', usuariosRoutes);
app.use('/roles', rolesRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8000);
