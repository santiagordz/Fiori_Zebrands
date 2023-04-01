const issuesModel = require('../models/issues.model');
const db = require('../database/db');

exports.getIssuesJira = async (req, res, next) => {
  try {
    res.json(await issuesModel.fetchIssuesJira());
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error al obtener los usuarios.' });
  }
};
