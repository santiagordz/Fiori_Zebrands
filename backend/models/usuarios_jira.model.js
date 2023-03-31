const db = require('../database/db');

require('dotenv').config();

const axios = require('axios');
const auth = {
  username: process.env.JIRA_USERNAME,
  password: process.env.JIRA_PASSWORD,
};

const Jira_id = [];
const Jira_nombre = [];

module.exports = class Usuarios_Jira {
  static fetchJiraUsers = async () => {
    const response = await axios.get(
      `https://fioritec.atlassian.net/rest/api/3/users/search`,
      {
        auth: auth,
      }
    );

    var atlassianUsers = response.data.filter(function (user) {
      return user.accountType.toLowerCase() === 'atlassian';
    });

    const jiraUsers = atlassianUsers.map(function (user) {
      return {
        accountId: user.accountId,
        displayName: user.displayName,
        accountType: user.accountType,
      };
    });

    return jiraUsers;
  };

  static getJiraUsers = async () => {
    return await db.execute('SELECT * FROM usuarios_jira');
  };

  static postJiraUser = async (id_jira, nombre_jira) => {
    return db.execute(
      `INSERT INTO usuarios_jira (id, nombre) VALUES (?, ?)`,
      [id_jira, nombre_jira]
    );
  };
};
