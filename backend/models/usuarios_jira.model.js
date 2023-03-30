const db = require('../database/db');
const axios = require('axios');
const auth = {
  username: 'a01708830@tec.mx',
  password:
    'ATATT3xFfGF0XKSl4lZMWgE9dWqgKuV6H3e0XrsxdoygjnIlPPuTV7mS3WT_DjiWkj6ruEXp7m55st81d6iEBf0L2dvDR2d26_nlNAfTvbIyK370i8hGc3h0Z_NjBTW7VFhMm48YkRshCtzAtYjR1kMtl40ol3KVf3bXeP1f09rqRAg9TqWGMl0=6C4489B3',
};

const Jira_id = [];
const Jira_nombre = [];

const getProjectInfo = async () => {
  const response = await axios.get(
    `https://fioritec.atlassian.net/rest/api/3/users/search`,
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

getProjectInfo().then((data) => {
  console.log(data);
});

module.exports = class Usuario_Jira {
  constructor(Usuario_Jira) {
    this.id_jira = Usuario_Jira.accountId;
    this.username_jira = Usuario_Jira.displayName;
  }
};
