const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const usuariosRoutes = require('./routes/usuarios.routes');

app.use('/usuarios', usuariosRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8000);
