const Roles = require('../models/roles.model');

exports.getAllRoles = (req, res, next) => {
  Roles.getAllRoles()
    .then(([rows, fieldData]) => {
      res.json(rows);
    })
    .catch((err) => console.log(err));
};

exports.getRolById = (req, res, next) => {
  const id = req.params.id;
  Roles.getRolById(id)
    .then(([rows, fieldData]) => {
      res.json(rows);
    })
    .catch((err) => console.log(err));
};
