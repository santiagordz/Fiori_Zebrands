const db = require('../database/db');

require('dotenv').config();

const axios = require('axios');
const auth = {
  username: process.env.JIRA_USERNAME_ZEB,
  password: process.env.JIRA_PASSWORD_ZEB,
};

module.exports = class Usuarios_Jira {
  static fetchJiraUsers = async () => {
    const response = await axios.get(
      `https://zebrands.atlassian.net/rest/api/3/users/search`,
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
    return await db.execute(
      'SELECT * FROM usuarios_jira WHERE id_jira NOT IN (SELECT id_jira FROM usuarios WHERE id_jira IS NOT NULL);'
    );
  };

  static postJiraUser = async (id_jira, nombre_jira) => {
    return db.execute(
      `INSERT IGNORE INTO usuarios_jira (id_jira, nombre_jira) VALUES (?, ?)`,
      [id_jira, nombre_jira]
    );
  };
};
