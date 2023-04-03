const epicsModel = require('../models/epics.model');
const db = require('../database/db');

exports.getEpicsJira = async (req, res, next) => {
  try {
    res.json(await epicsModel.fetchEpicsJira());
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los epics.' });
  }
};

exports.postEpicsJira = async (req, res, next) => {
  try {
    const epics = await epicsModel.fetchEpicsJira();
    for (let epic of epics) {
      await epicsModel.postEpicsJira(
        epic.key,
        epic.summary,
        epic.status,
        epic.color
      );
    }
    res.send('Epics guardados');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los epics.' });
  }
};
