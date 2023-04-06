const db = require('../database/db');

module.exports = class Sprint {
  static getEstadosJira = async () => {
    return db.execute('SELECT * FROM estados_issues');
  };
  static postEstadosIssue = async (estado, key_issue, key_epic) => {
    console.log('agregado : ', key_issue);
    return db.execute(
      `INSERT INTO estados_issues (estado, key_issue, key_epic) VALUES (?, ?, ?)`,
      [estado, key_issue, key_epic]
    );
  };

  static countEstadosIssues = async () => {
    return db.execute(`SELECT COUNT(*) AS count FROM estados_issues`);
  };
};
