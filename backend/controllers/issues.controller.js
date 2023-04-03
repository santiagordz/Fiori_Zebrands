const axios = require('axios');
const issuesModel = require('../models/issues.model');
const db = require('../database/db');
const usuario_issues = require('../models/usuarios_issues.model');

exports.getIssuesJira = async (req, res, next) => {
  try {
    res.json(await issuesModel.fetchIssuesJira());
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los issues.' });
  }
};

exports.postIssuesJira = async (req, res, next) => {
  await axios.post('http://localhost:8000/epics');
  const issues = await issuesModel.fetchIssuesJira();
  try {
    issues.map(async (issue) => {
      await issuesModel.postIssue(
        issue.clave,
        issue.tipo,
        issue.story_points,
        issue.key_epic,
        issue.assignee_id,
        issue.status
      );
      if (issue.assignee_id !== null) {
        await usuario_issues.createUsuarioIssue(
          issue.assignee_id,
          issue.clave
        );
      }
    });
    res.send('listo');
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error al insertar los issues.' });
  }
};
