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

  //the next method returns the status of the issues assigned to the logged in user depending to the selected sprint
  static getIssuesByUser(id, ids) {
    const placeholders = Array(ids.length).fill('?').join(',');
    const sql = `

    `;
    return db.execute(
      `
      SELECT i.status, COUNT(*) AS total
      FROM issues i, sprints s, sprints_issues si
      WHERE i.clave = si.id_issue 
      AND i.status IN ("Done", "To Do", "En Curso")
      AND si.id_sprint = s.id_jira
      AND i.assignee_id = ?
      AND s.id_jira IN (${placeholders})
      GROUP BY i.status
    `,
      [id, ...ids]
    );
  }

  static getIssuesByUserSolo(id) {
    const sql = `
    SELECT i.status, COUNT(*) AS total
    FROM issues i
    WHERE i.status IN ("Done", "To Do", "En Curso")
    AND i.assignee_id = ?
    GROUP BY i.status
    `;
    return db.execute(sql, [id]);
  }

  //the next method returns the story points of the issues assigned to the logged in user in two groups: done and not done
  static getStoryPointsByUser(id, ids) {
    const placeholders = Array(ids.length).fill('?').join(',');
    const sql = `
    SELECT i.status, SUM(i.story_points) AS total_story_points
    FROM issues i, sprints s, sprints_issues si
    WHERE i.clave = si.id_issue
    AND si.id_sprint = s.id_jira
    AND i.assignee_id = ?
    AND s.id_jira IN (${placeholders})
    GROUP BY i.status;
    `;
    return db.execute(sql, [id, ...ids]);
  }

  static getStoryPointsByUserSolo(id) {
    const sql = `
    SELECT i.status, SUM(i.story_points) AS total_story_points
    FROM issues i
    WHERE i.assignee_id = ?
    GROUP BY i.status;
    `;
    return db.execute(sql, [id]);
  }

  static getIssuesByEpic(id) {
    return db.execute(
      `
      SELECT i.status, COUNT(*) AS total
      FROM issues i
      WHERE i.key_epic = ?
      AND i.status IN ("Done", "To Do", "En Curso")
      GROUP BY i.status
      `,
      [id]
    );
  }
};
