const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const preguntaRoutes = require('./routes/preguntaNoPredeterminada.routes');
const tipoPregunta = require('./routes/tipoPregunta.routes')
const preguntasPredeterminadas = require('./routes/preguntasPredeterminadas.routes')

app.use('/pregunta', preguntaRoutes);
app.use('/pregunts',  tipoPregunta);
app.use('/preguntasPredeterminadas',  preguntasPredeterminadas);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8000);