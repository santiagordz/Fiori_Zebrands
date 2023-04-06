const sprintsDataModel = require('../models/statusissues.model');
const db = require('../database/db');

exports.getIssuesBySprint = async (req, res, next) => {
  try {
    res.json(await sprintsDataModel.getIssuesBySprint(req.params.id));
    sprintsDataModel
      .getIssuesBySprint(req.params.id)
      .then(([rows]) => {
        res.json(rows);
      });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error al obtener los Sprints.' });
  }
};
