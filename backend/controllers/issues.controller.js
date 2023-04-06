const axios = require('axios');
const issuesModel = require('../models/issues.model');
const db = require('../database/db');
const usuario_issues = require('../models/usuarios_issues.model');
const sprint_issues = require('../models/sprint_issue.model');
const estados_issue = require('../models/estado_issue.model');

exports.getIssuesJira = async (req, res, next) => {
  try {
    res.json(await issuesModel.fetchIssuesJira());
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los issues.' });
  }
};

exports.postIssuesJira = async (req, res, next) => {
  axios.post('http://localhost:8000/usuarios_jira');
  axios.post('http://localhost:8000/epics');
  axios.post('http://localhost:8000/sprints');

  let issuesDB = await estados_issue.getEstadosJira();
  let countIssuesDB = await estados_issue.countEstadosIssues();
  issuesDB = issuesDB.shift();
  countIssuesDB = countIssuesDB[0][0].count;
  console.log(countIssuesDB);

  const issues = await issuesModel.fetchIssuesJira(0);
  console.log(issues.length);

  issues.map(async (issue, index) => {
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
        await estados_issue.postEstadosIssue(
          issue.status,
          issue.clave,
          issue.key_epic
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
      res.send('listo');
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: 'Error al insertar los issues.' });
    }
  });
};
