const db = require('../database/db');
require('dotenv').config();
const axios = require('axios');
const auth = {
  username: process.env.JIRA_USERNAME_ZEB,
  password: process.env.JIRA_PASSWORD_ZEB,
};

module.exports = class Epic {
  static fetchEpicsJira = async () => {
    const maxResults = 100;
    let startAt = 3080;
    let isLast = false;
    let epicsJira = [];

    while (!isLast) {
      const response = await axios.get(
        'https://zebrands.atlassian.net/rest/api/2/search?jql=project=TPECG%20AND%20type=Epic&maxResults=100',
        {
          auth: auth,
        }
      );

      epicsJira = epicsJira.concat(response.data.issues);
      isLast = startAt + maxResults >= response.data.total;
      startAt += maxResults;
    }

    const epics = epicsJira.map((epic) => {
      return {
        key: epic.key,
        summary: epic.fields.summary,
        status: epic.fields.status.name,
        type: epic.fields.issuetype.name,
        color: epic.fields.status.statusCategory.colorName,
        createdAt: epic.fields.created,
        updatedAt: epic.fields.updated,
      };
    });

    return epics;
  };

  static postEpicsJira = async (
    key,
    summary,
    status,
    color,
    createdAt,
    updatedAt
  ) => {
    return db.execute(
      `INSERT IGNORE INTO epics (id_jira, nombre, status, color, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)`,
      [key, summary, status, color, createdAt, updatedAt]
    );
  };

  static getEpicsWithIssues = async () => {
    return db.execute(`
    SELECT epics.id_jira AS 'key', epics.nombre AS 'summary'
    FROM epics, issues
    WHERE epics.id_jira = issues.key_epic
    AND issues.key_epic IS NOT NULL
    GROUP BY epics.id_jira, epics.nombre
    `);
  };
};
