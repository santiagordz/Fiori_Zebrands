const db = require('../database/db');

module.exports = class sprint_issue {
  static postSprintIssue = async (id_sprint, id_issue, estado) => {
    return db.execute(
      `INSERT IGNORE INTO sprints_issues (id_sprint, id_issue, estado) VALUES (?, ?, ?)`,
      [id_sprint, id_issue, estado]
    );
  };
};
