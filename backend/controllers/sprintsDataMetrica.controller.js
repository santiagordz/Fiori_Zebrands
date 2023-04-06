const sprintsDataModel = require('../models/statusissues.model');
const db = require('../database/db');

exports.getSprintsData = async (req, res, next) => {
  try {
    res.json(await sprintsDataModel.fetchAll());
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error al obtener los Sprints.' });
  }
};
