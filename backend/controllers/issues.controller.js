const issuesModel = require('../models/issues.model');
const db = require('../database/db');

exports.getIssuesJira = async (req, res, next) => {
  try {
    res.json(await issuesModel.fetchIssuesJira());
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los issues.' });
  }
};

exports.postIssuesJira = async (req, res, next) => {
  const issues = await issuesModel.fetchIssuesJira();
  for (let issue of issues) {
    await issuesModel.postIssue(
      issue.key,
      issue.type,
      issue.issue_storypoints,
      issue.parent.shift(),
      issue.assignee_id.shift(),
      issue.issue_status
    );
  }
};
