const db = require('../database/db');
require('dotenv').config();
const axios = require('axios');
const auth = {
  username: process.env.JIRA_USERNAME_ZEB,
  password: process.env.JIRA_PASSWORD_ZEB,
};

module.exports = class Epic {
  static fetchEpicsJira = async () => {
    const response = await axios.get(
      'https://zebrands.atlassian.net/rest/api/3/search?jql=Sprint%20%3D%20%22[ZeCommerce Tech] Sprint 5%22%20ORDER%20BY%20createdDate%20DESC',
      {
        auth: auth,
      }
    );

    var epicsFiltered = [];

    const jsonData = response.data;

    // Loop through each issue and extract the required information
    const epicsJira = jsonData.issues.map(function (epics) {
      if (epics.fields.parent) {
        epicsFiltered.push({
          key: epics.fields.parent.key,
          summary: epics.fields.parent.fields.summary,
          status: epics.fields.parent.fields.status.name,
          type: epics.fields.parent.fields.issuetype.name,
          color:
            epics.fields.parent.fields.status.statusCategory
              .colorName,
        });
      }
    });

    return epicsFiltered;
  };

  static postEpicsJira = async (key, summary, status, color) => {
    return db.execute(
      `INSERT IGNORE INTO epics (id_jira, nombre, status, color) VALUES (?, ?, ?, ?)`,
      [key, summary, status, color]
    );
  };
};
