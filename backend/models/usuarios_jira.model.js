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
      `https://zebrands.atlassian.net/rest/api/2/project/TPECG/role/10155`,
      {
        auth: auth,
      }
    );

    var jsonData = response.data;
    var actors = [];

    jsonData.actors.map((actor) => {
      actors.push({
        accountId: actor.actorUser.accountId,
        displayName: actor.displayName,
        accountType: actor.type,
      });
    });

    return actors;
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
