const db = require('../database/db');
require('dotenv').config();
const axios = require('axios');
const auth = {
  username: process.env.JIRA_USERNAME,
  password: process.env.JIRA_PASSWORD,
};

module.exports = class Issue {
  static fetchIssuesJira = async () => {
    const response = await axios.get(
      `https://fioritec.atlassian.net/rest/api/3/search?jql=project=ZEB AND issuetype=Task AND status=Open`,
      {
        auth: auth,
      }
    );

    return response.data;
  };
};
