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

    const epicsJira = response.data.epics.map((epic) => {
      console.log(epic);
    });
  };
};
