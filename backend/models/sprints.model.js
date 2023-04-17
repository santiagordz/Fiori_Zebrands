const db = require('../database/db');
require('dotenv').config();
const axios = require('axios');
const auth = {
  username: process.env.JIRA_USERNAME_ZEB,
  password: process.env.JIRA_PASSWORD_ZEB,
};

class Sprint {
  static fetchSprintsJira = async () => {
    const maxResults = 100;
    let startAt = 0;
    let isLast = false;
    let sprintsJira = [];

    while (!isLast) {
      const response = await axios.get(
        `https://zebrands.atlassian.net/rest/agile/1.0/board/549/sprint?startAt=${startAt}&maxResults=${maxResults}`,
        {
          auth: auth,
        }
      );

      sprintsJira = sprintsJira.concat(response.data.values);
      isLast = response.data.isLast;
      startAt += maxResults;
    }

    const sprints = sprintsJira.map((sprint) => {
      return {
        id: sprint.id,
        nombre: sprint.name,
        fecha_inicio: sprint.startDate,
        fecha_fin: sprint.endDate,
        state: sprint.completeDate ? 'closed' : 'active',
        boardId: sprint.originBoardId,
      };
    });

    return sprints;
  };

  static postSprints = async (
    id,
    nombre,
    fecha_inicio,
    fecha_fin,
    state,
    boardId
  ) => {
    return db.execute(
      `INSERT IGNORE INTO SPRINTS (id_jira, nombre, fecha_inicio, fecha_fin, state, boardId) VALUES (?, ?, ?, ?, ?, ?)`,
      [id, nombre, fecha_inicio, fecha_fin, state, boardId]
    );
  };

  static getSprints = async () => {
    return db.execute(`SELECT * FROM sprints`);
  };

  static deleteSprints = async (id) => {
    return db.execute(`DELETE FROM SPRINTS WHERE id_jira = ?`, [id]);
  };

  static updateSprint = async (id, state) => {
    return db.execute(
      `UPDATE SPRINTS SET state = ? WHERE id_jira = ?`,
      [id, state]
    );
  };
}

module.exports = Sprint;
