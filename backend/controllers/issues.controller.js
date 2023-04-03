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
  axios.post('http://localhost:8000/epics').then(async () => {
    const issues = await issuesModel.fetchIssuesJira();
    for (let issue of issues) {
      await issuesModel.postIssue(
        issue.key,
        issue.type,
        issue.issue_storypoints,
        issue.parent.shift(),
        issue.assignee_id,
        issue.issue_status
      );

      if (issue.assignee_id) {
        await usuario_issues.createUsuarioIssue(
          console.log(issue.key),
          issue.assignee_id ? issue.assignee_id : null,
          issue.key
        );
      }
    }
    res.send('Issues guardados en la base de datos');
  });
};
