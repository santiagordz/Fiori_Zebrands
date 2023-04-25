const Accionables = require('../models/accionables.model');

const getAccionablesByUserId = (req, res) => {
  const id_usuario = req.params.id;
  console.log('id_usuario en controller:', id_usuario); // Agrega esta línea
  Accionables.getAccionablestaByUserId(id_usuario)
    .then(([rows, fieldData]) => {
      res.json(rows);
    })
    .catch((err) => console.log(err));
  console.log(rows);
};

const createAccionable = (req, res) => {
  console.log('Recibiendo accionable:', req.body);
  const { id_usuario, accionable, fecha } = req.body;

  const [dia, mes, anio] = fecha.split('/');
  const fechaFormatoMySQL = `${anio}-${mes.padStart(
    2,
    '0'
  )}-${dia.padStart(2, '0')}`;

  Accionables.createAccionable(
    id_usuario,
    accionable,
    fechaFormatoMySQL
  )
    .then(([rows, fieldData]) => {
      res.json(rows);
    })
    .catch((err) => console.log(err));
};

const postAccionable = async (req, res) => {
  try {
    const { id_usuario, descripcion } = req.params;
    await Accionables.postAccionable(id_usuario, descripcion);
    res.json({ message: 'Accionable creado' });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAccionablesByUserId,
  createAccionable,
  postAccionable,
};
