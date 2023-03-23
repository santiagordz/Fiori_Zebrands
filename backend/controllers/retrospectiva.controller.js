const Retrospectiva = require('../models/retrospectiva.model');

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

exports.getOne = async (req, res) => {
  try {
    const [retrospectiva] = await Retrospectiva.fetchOne(
      req.params.id
    );
    res.json(retrospectiva[0]);
  } catch (err) {
    console.log(err);
  }
};

exports.getQuestions = async (req, res) => {
  try {
    const [questions] = await Retrospectiva.fetchQuestions(
      req.params.id
    );

    res.json(questions);
  } catch (err) {
    console.log(err);
  }
};
