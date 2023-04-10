const db = require('../database/db');
require('dotenv').config();
const axios = require('axios');
const auth = {
  username: process.env.JIRA_USERNAME_ZEB,
  password: process.env.JIRA_PASSWORD_ZEB,
};

module.exports = class Epic {
  static fetchEpicsJira = async () => {
    const maxResults = 100; // Número máximo de issues a recuperar por solicitud
    let startAt = 3080; // Punto de inicio para recuperar issues en cada solicitud
    let isLast = false; // Indicador para verificar si se han recuperado todos los issues
    let epicsJira = []; // Arreglo para almacenar todos los issues recuperados

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
      };
    });

    return epics;
  };

  static postEpicsJira = async (key, summary, status, color) => {
    return db.execute(
      `INSERT IGNORE INTO epics (id_jira, nombre, status, color) VALUES (?, ?, ?, ?)`,
      [key, summary, status, color]
    );
  };
};
