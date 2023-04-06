const sprintsDataModel = require('../models/statusissues.model');
const db = require('../database/db');

exports.fetchSprintById = async (req, res, next) => {
  const sprintId = req.params.id;
  try {
    const sprint = await sprintsDataModel.getIssuesBySprint(sprintId);
    res.json({ sprint });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el sprint.' });
  }
};
