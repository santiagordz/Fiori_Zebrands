const db = require('../database/db');
const jsonsql = require('jsonsql');

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

  static getIssuesBySprints(ids) {
    const placeholders = Array(ids.length).fill('?').join(',');
    const sql = `
      SELECT 
        i.status,
        COUNT(*) AS total
      FROM 
        issues i
      JOIN 
        sprints_issues si ON i.clave = si.id_issue
      WHERE 
        i.status IN ('Done', 'Pull request', 'To Do', 'En curso')
        AND si.id_sprint IN (${placeholders})
      GROUP BY 
        i.status;
    `;
    return db.execute(sql, ids);
  }

  static getIssuesByStoryPoints(ids) {
    const placeholders = Array(ids.length).fill('?').join(',');
    const sql = `
    SELECT i.status, SUM(i.story_points) AS total_story_points
    FROM issues i
    JOIN sprints_issues isp ON i.clave = isp.id_issue
    JOIN sprints ts ON ts.id_jira = isp.id_sprint
    WHERE ts.id_jira IN (${placeholders})
    GROUP BY i.status;
    `;
    return db.execute(sql, ids);
  }
};
