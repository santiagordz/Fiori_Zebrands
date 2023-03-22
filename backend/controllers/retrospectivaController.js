const Retrospectiva = require('../models/retrospectivaModel');

exports.getAllRetrospectivas = async (req, res) => {
  try {
    const [retropectivas] = await Retrospectiva.fetchAll();
    res.json(retropectivas);
  } catch (err) {
    console.log(err);
  }
};

exports.getPanelRetros = async (req, res) => {
  try {
    const [retropectivas] = await Retrospectiva.fetchPanelRetros();
    res.json(retropectivas);
  } catch (err) {
    console.log(err);
  }
};
