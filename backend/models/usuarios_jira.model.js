const db = require('../database/db');
const axios = require('axios');
const auth = {
  username: 'bernardo.laing@zeb.mx',
  password:
    'ATATT3xFfGF0WULrdZADxv7NnfsNI6qZHwdyDx3C7_9mysxgPg5vR-YthjGcDKiD66gPbi6YE2sF301q2SBWNOllGA1TzrXxN9FGw7MB524gUd6JYNCb5aI6DSoEiNKuJsUvxAuGwA3RqLoVofY-1hqg3vGwdnnZQyG27X3oUgt62OfeALzzGYo=44ADD8CC',
};

const Jira_id = [];
const Jira_nombre = [];

const getProjectInfo = async () => {
  const response = await axios.get(
    `https://zebrands.atlassian.net/rest/api/3/users/search`,
    {
      auth: auth,
    }
  );
  var atlassianUsers = response.data.filter(function (user) {
    return user.accountType.toLowerCase() === 'atlassian';
  });

  atlassianUsers.forEach(function (user) {
    Jira_id.push(user.accountId);
    Jira_nombre.push(user.displayName);
  });

  const Jira_Users = {
    Jira_id,
    Jira_nombre,
  };

  return Jira_Users;
};

getProjectInfo().then((projectInfo) => {
  console.log(projectInfo);
});

module.exports = class Usuario_Jira {};
