const db = require('../database/db');
require('dotenv').config();
const axios = require('axios');
const auth = {
  username: process.env.JIRA_USERNAME_ZEB,
  password: process.env.JIRA_PASSWORD_ZEB,
};

module.exports = class Issue {
  static fetchIssuesJira = async (start) => {
    const maxResults = 100; // Número máximo de issues a recuperar por solicitud
    let startAt = start; // Punto de inicio para recuperar issues en cada solicitud
    let isLast = false; // Indicador para verificar si se han recuperado todos los issues
    let issuesJira = []; // Arreglo para almacenar todos los issues recuperados

    while (!isLast) {
      const response = await axios.get(
        `https://zebrands.atlassian.net/rest/api/2/search?jql=project=TPECG ORDER BY created DESC &startAt=${startAt}&maxResults=${maxResults}`,
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

  static getIssues = async () => {
    return db.execute(`SELECT * FROM issues`);
  };

  static postIssue = async (
    clave,
    tipo,
    story_points,
    assignee_id
  ) => {
    try {
      return db.execute(
        `INSERT IGNORE INTO issues (clave, tipo, story_points, assignee_id) VALUES (?, ?, ?, ?)`,
        [clave, tipo, story_points, assignee_id]
      );
    } catch (error) {
      console.error(error);
    }
  };
};
