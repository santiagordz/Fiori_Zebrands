const db = require('../database/db');
require('dotenv').config();
const axios = require('axios');
const auth = {
  username: process.env.JIRA_USERNAME_ZEB,
  password: process.env.JIRA_PASSWORD_ZEB,
};

module.exports = class Issue {
  static fetchIssuesJira = async (start) => {
    const maxResults = 100;
    let startAt = start;
    let isLast = false;
    let issuesJira = [];

    while (!isLast) {
      const response = await axios.get(
        `https://zebrands.atlassian.net/rest/api/2/search?jql=project=TPECG AND issuetype in (Bug, Story, Task) ORDER BY created ASC &startAt=${startAt}&maxResults=${maxResults}`,
        {
          auth: auth,
        }
      );

      issuesJira = issuesJira.concat(response.data.issues);
      isLast = startAt + maxResults >= response.data.total;
      startAt += maxResults;
    }

    const issues = issuesJira
      .map((issue) => {
        if (issue.fields.issuetype.name != 'Epic') {
          const newIssue = {
            id: issue.id,
            clave: issue.key,
            tipo: issue.fields.issuetype.name,
            story_points: issue.fields.customfield_10042,
            key_epic: issue.fields.parent
              ? issue.fields.parent.key
              : null,
            assignee_id: issue.fields.assignee
              ? issue.fields.assignee.accountId
              : null,
            status: issue.fields.status.name,
            sprints: issue.fields.customfield_10010,
          };
          return Object.fromEntries(
            Object.entries(newIssue).filter(
              ([_, v]) => v !== undefined
            )
          );
        }
      })
      .filter((issue) => issue);

    return issues;
  };

  static getLastUpdate = async () => {
    return db.execute(`
    SELECT updatedAt FROM last_fetch
    `);
  };

  static fetchIssuesJiraUpdated = async (start, fecha) => {
    const maxResults = 100;
    let startAt = start;
    let isLast = false;
    let issuesJira = [];
    const date = new Date();
    const today = date.toISOString().slice(0, 10);

    while (!isLast) {
      const response = await axios.get(
        `https://zebrands.atlassian.net/rest/api/2/search?jql=project=TPECG AND issuetype in (Bug, Story, Task) AND updated >= ${fecha} AND updated <= ${today} ORDER BY created ASC &startAt=${startAt}&maxResults=${maxResults}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.JIRA_PASSWORD_ZEB}`,
          },
        }
      );

      issuesJira = issuesJira.concat(response.data.issues);
      isLast = startAt + maxResults >= response.data.total;
      startAt += maxResults;
    }

    const issues = issuesJira
      .map((issue) => {
        if (issue.fields.issuetype.name != 'Epic') {
          const newIssue = {
            id: issue.id,
            clave: issue.key,
            tipo: issue.fields.issuetype.name,
            story_points: issue.fields.customfield_10042,
            key_epic: issue.fields.parent
              ? issue.fields.parent.key
              : null,
            assignee_id: issue.fields.assignee
              ? issue.fields.assignee.accountId
              : null,
            status: issue.fields.status.name,
            sprints: issue.fields.customfield_10010,
          };
          return Object.fromEntries(
            Object.entries(newIssue).filter(
              ([_, v]) => v !== undefined
            )
          );
        }
      })
      .filter((issue) => issue);

    await db.execute(
      `UPDATE last_fetch SET updatedAt = CURRENT_TIMESTAMP`
    );

    return issues;
  };

  static getIssues = async () => {
    return db.execute(`SELECT * FROM issues`);
  };

  static countIssues = async () => {
    return db.execute(`SELECT COUNT(*) AS count FROM issues`);
  };

  static postIssue = async (
    clave,
    tipo,
    story_points,
    key_epic,
    assignee_id,
    status
  ) => {
    try {
      return db.execute(
        `INSERT IGNORE INTO issues (clave, tipo, story_points, assignee_id, key_epic, status) VALUES (?, ?, ?, ?, ?, ?)`,
        [clave, tipo, story_points, assignee_id, key_epic, status]
      );
    } catch (error) {
      console.error(error);
    }
  };

  static updateIssues = async (status, id) => {
    return db.execute(`UPDATE issues SET status = ? WHERE id = ?`, [
      status,
      id,
    ]);
  };

  static getCountIssues = async () => {
    return db.execute(`SELECT COUNT(*) AS 'count' FROM issues`);
  };

  static getLastFetch = async () => {
    return db.execute(`SELECT updatedAt FROM last_fetch`);
  };
};
