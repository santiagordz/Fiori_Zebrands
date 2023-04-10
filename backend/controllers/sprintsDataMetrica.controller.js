const sprintsDataModel = require('../models/statusissues.model');
const db = require('../database/db');

exports.fetchSprintsByIds = async (req, res, next) => {
  const sprintIds = req.params.ids.split(',').map(Number);
  try {
    const sprints = await sprintsDataModel.getIssuesBySprints(
      sprintIds
    );
    res.json({ sprints });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error al obtener los sprints.' });
  }
};

exports.fetchStoryPoints = async (req, res, next) => {
  const sprintIds = req.params.ids.split(',').map(Number);
  try {
    const sprints = await sprintsDataModel.getIssuesByStoryPoints(
      sprintIds
    );
    res.json({ sprints });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error al obtener los sprints.' });
  }
};

exports.fetchUserIssues = async (req, res, next) => {
  const userId = req.params.id;
  const sprintIds = req.params.ids.split(',').map(Number);
  try {
    const issues = await sprintsDataModel.getIssuesByUser(
      userId,
      sprintIds
    );
    res.json({ issues });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los issues.' });
  }
};

exports.fetchUserIssuesSolo = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const issues = await sprintsDataModel.getIssuesByUserSolo(userId);
    res.json({ issues });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los issues.' });
  }
};

exports.fetchUserStoryPoints = async (req, res, next) => {
  const userId = req.params.id;
  const sprintIds = req.params.ids.split(',').map(Number);
  try {
    const issues = await sprintsDataModel.getStoryPointsByUser(
      userId,
      sprintIds
    );
    res.json({ issues });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los issues.' });
  }
};

exports.fetchUserStoryPointsSolo = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const issues = await sprintsDataModel.getStoryPointsByUserSolo(
      userId
    );
    res.json({ issues });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los issues.' });
  }
};
