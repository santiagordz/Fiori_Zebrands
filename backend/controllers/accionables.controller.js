const Accionables = require("../models/accionables.model");

exports.createAccionables = (req, res) => {
  const id_usuario = req.body.id_usuario;
  const descripcion = req.body.descripcion;
  const fecha = req.body.fecha;
  const completada = req.body.completada;

  Accionables.createAccionables(id_usuario, descripcion, fecha, completada)
    .then(([rows, fieldData]) => {
      res.json(rows);
    })
    .catch((err) => console.log(err));

  exports.getAccionableById = (req, res, next) => {
    const id = req.params.id;
    Accionables.getAccionableById(id)
      .then(([rows, fieldData]) => {
        res.json(rows);
      })
      .catch((err) => console.log(err));
  };
};
