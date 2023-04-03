const db = require('../database/db');
require('dotenv').config();
const axios = require('axios');
const auth = {
  username: process.env.JIRA_USERNAME_ZEB,
  password: process.env.JIRA_PASSWORD_ZEB,
};

module.exports = class Issue {
  static fetchIssuesJira = async () => {
    const response = await axios.get(
      `https://zebrands.atlassian.net/rest/api/3/search?jql=Sprint%20%3D%20%22[ZeCommerce Tech] Sprint 5%22%20ORDER%20BY%20createdDate%20DESC`,
      {
        auth: auth,
      }
    );

    const issuesJira = response.data.issues.map(function (issue) {
      const issue_parent = [];
      const issue_type_parent = [];
      const issue_assignee_id = [];
      const issue_assignee_name = [];

      if (issue.fields.parent) {
        issue_parent.push(issue.fields.parent.key);
      } else {
        issue_parent.push(null);
      }

      if (issue.fields.parent != null) {
        issue_type_parent.push(
          issue.fields.parent.fields.issuetype.name
        );
      } else {
        issue_type_parent.push(null);
      }

      if (issue.fields.assignee != null) {
        issue_assignee_id.push(issue.fields.assignee.accountId);
      } else {
        issue_assignee_id.push(null);
      }

      if (issue.fields.assignee != null) {
        issue_assignee_name.push(issue.fields.assignee.displayName);
      } else {
        issue_assignee_name.push(null);
      }

      return {
        id: issue.id,
        key: issue.key,
        type: issue.fields.issuetype.name,
        parent: issue_parent,
        type_parent: issue_type_parent,
        sprint_id: issue.fields.customfield_10010[0].id,
        assignee_id: issue_assignee_id,
        assignee_name: issue_assignee_name,
        issue_storypoints: issue.fields.customfield_10042,
        issue_status: issue.fields.status.name,
      };
    });

    return issuesJira;
  };

  static postIssue = async (
    clave,
    tipo,
    story_points,
    key_epic,
    assignee_id,
    status
  ) => {
    return db.execute(
      `INSERT IGNORE INTO ISSUES (clave, tipo, story_points, key_epic, assignee_id, status) VALUES (?, ?, ?, ?, ?, ?)`,
      [clave, tipo, story_points, key_epic, assignee_id, status]
    );
  };
};
