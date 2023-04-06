const db = require('../database/db');
require('dotenv').config();
const axios = require('axios');
const auth = {
  username: process.env.JIRA_USERNAME_ZEB,
  password: process.env.JIRA_PASSWORD_ZEB,
};

class Sprint {
  static fetchSprintsJira = async () => {
    const maxResults = 100; // Número máximo de issues a recuperar por solicitud
    let startAt = 0; // Punto de inicio para recuperar issues en cada solicitud
    let isLast = false; // Indicador para verificar si se han recuperado todos los issues
    let sprintsJira = []; // Arreglo para almacenar todos los issues recuperados

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
}

module.exports = Sprint;