const Accionables = require("../models/accionables.model");

const getAccionablesByUserId = async (req, res) => {
  const id_usuario = req.params.id;
  console.log(id_usuario);

  try {
    const [accionables] = await Accionables.getAccionablesByUserId(id_usuario);
    res.json(accionables);
  } catch (err) {
    console.log(err);
  }
};

const createAccionable = (req, res) => {
  console.log("Recibiendo accionable:", req.body);
  const { id_usuario, accionable, fecha } = req.body;

  const [dia, mes, anio] = fecha.split("/");
  const fechaFormatoMySQL = `${anio}-${mes.padStart(2, "0")}-${dia.padStart(
    2,
    "0"
  )}`;

  Accionables.createAccionable(id_usuario, accionable, fechaFormatoMySQL)
    .then(([rows, fieldData]) => {
      res.json(rows);
    })
    .catch((err) => console.log(err));
};

module.exports = { getAccionablesByUserId, createAccionable };
