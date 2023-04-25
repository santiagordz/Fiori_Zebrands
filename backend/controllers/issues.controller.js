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

exports.fetchIssuesJiraUpdated = async (req, res, next) => {
  let lastUpdate = await issuesModel.getLastUpdate();
  lastUpdate = lastUpdate[0][0].updatedAt;
  lastUpdate = lastUpdate.toISOString().slice(0, 10);

  try {
    res.json(await issuesModel.fetchIssuesJiraUpdated(0, lastUpdate));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error al obtener los issues actualizados.' });
  }
};

exports.postIssuesJira = async (req, res, next) => {
  await axios.post('http://localhost:8000/usuarios_jira');
  await axios.post('http://localhost:8000/epics');
  await axios.post('http://localhost:8000/sprints');

  let issuesDB = await issuesModel.getIssues();
  let countIssuesDB = await issuesModel.countIssues();
  issuesDB = issuesDB.shift();
  countIssuesDB = countIssuesDB[0][0].count;

  let lastUpdate = await issuesModel.getLastUpdate();
  lastUpdate = lastUpdate[0][0].updatedAt;
  lastUpdate = lastUpdate.toISOString().slice(0, 10);

  let sprintsDB = await sprints.getSprints();
  sprintsDB = sprintsDB.shift();

  const issues = await issuesModel.fetchIssuesJira(countIssuesDB);
  const issuesUpdated = await issuesModel.fetchIssuesJiraUpdated(
    0,
    lastUpdate
  );

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
    issuesUpdated.map(async (issue, id) => {
      await issuesModel.updateIssues(issue.status, issue.clave);
    });
    res.send('ya');
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error al insertar los issues.' });
  }
};

exports.getLastFetch = async (req, res, next) => {
  try {
    const [[lastFetch]] = await issuesModel.getLastFetch();
    res.json(lastFetch.updatedAt);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la fecha.' });
  }
};
