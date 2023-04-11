const axios = require('axios');
const issuesModel = require('../models/issues.model');
const db = require('../database/db');
const usuario_issues = require('../models/usuarios_issues.model');
const sprint_issues = require('../models/sprint_issue.model');
const sprints = require('../models/sprints.model');

exports.getIssuesJira = async (req, res, next) => {
  try {
    res.json(await issuesModel.fetchIssuesJira(0));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los issues.' });
  }
};

exports.postIssuesJira = async (req, res, next) => {
  axios.post('http://localhost:8000/usuarios_jira');
  axios.post('http://localhost:8000/epics');
  axios.post('http://localhost:8000/sprints');

  let issuesDB = await issuesModel.getIssues();
  let countIssuesDB = await issuesModel.countIssues();
  issuesDB = issuesDB.shift();
  countIssuesDB = countIssuesDB[0][0].count;

  let sprintsDB = await sprints.getSprints();
  sprintsDB = sprintsDB.shift();

  console.log(countIssuesDB);

  const issues = await issuesModel.fetchIssuesJira(countIssuesDB);
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
      if (issue.sprints !== null) {
        issue.sprints.map(async (sprint) => {
          await sprint_issues.postSprintIssue(
            sprint.id,
            issue.clave,
            sprint.state
          );
        });
      }
    });
    res.send('ya');
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error al insertar los issues.' });
  }
};
