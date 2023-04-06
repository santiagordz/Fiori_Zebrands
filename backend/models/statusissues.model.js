const db = require('../database/db');

module.exports = class StatusIssue {
  constructor(id, status) {
    this.id = id;
    this.status = status;
  }

  static fetchAll = async () => {
    try {
      const [rows] = await db.execute('SELECT * FROM status_issues');
      return rows;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  static getIssuesBySprint(id) {
    return db.execute(
      `
      SELECT 
    i.status,
    COUNT(*) AS total
FROM 
    issues i
JOIN 
    sprints_issues si ON i.clave = si.id_issue
WHERE 
    i.status IN ('Done', 'Pull request', 'To Do', 'En curso')
    AND si.id_sprint = ?
GROUP BY 
    i.status;
  
          `,
      [id]
    );
  }
};
