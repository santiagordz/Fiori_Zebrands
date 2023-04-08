const sprintsDataModel = require('../models/statusissues.model');
const db = require('../database/db');

exports.fetchSprintsByIds = async (req, res, next) => {
  const sprintIds = req.params.ids.split(',').map(Number);
  try {
    const sprints = await sprintsDataModel.getIssuesBySprints(sprintIds);
    res.json({ sprints });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los sprints.' });
  }
};

exports.fetchStoryPoints = async (req, res, next) => {
  const sprintIds = req.params.ids.split(',').map(Number);
  try {
    const sprints = await sprintsDataModel.getIssuesByStoryPoints(sprintIds);
    res.json({ sprints });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los sprints.' });
  }
}
