const express = require('express');
const cors = require('cors');
const retrospectivaRoutes = require('./routes/retrospectivas.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/retrospectivas', retrospectivaRoutes);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
