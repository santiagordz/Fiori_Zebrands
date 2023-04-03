const sprintModel = require('../models/sprints.model')
const db = require('../database/db');

exports.getSprintsJira = async (req, res, next) => {
    try {
      res.json(await sprintModel.fetchSprintsJira());
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los Sprints.' });
    }
  };

exports.postSprintsJira = async (req, res, next) => {
    const sprints = await sprintModel.fetchSprintsJira();
    for (let sprint of sprints) {
      await sprintModel.postSprints(
        sprint.id,
        sprint.nombre,
        sprint.fecha_inicio,
        sprint.fecha_fin,
        sprint.state,
        sprint.boardId
      );
    }
  };
  