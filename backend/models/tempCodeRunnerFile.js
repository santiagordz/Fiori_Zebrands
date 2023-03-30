const jsonData = response.json();
  var atlassianUsers = jsonData.filter(function (user) {
    return user.accountType.toLowerCase() === 'atlassian';
  });

  var Jira_id = [];
  var Jira_nombre = [];

  atlassianUsers.forEach(function (user) {
    Jira_id.push(user.accountId);
    Jira_nombre.push(user.displayName);
  });

  console.log('ids: ' + Jira_id);
  