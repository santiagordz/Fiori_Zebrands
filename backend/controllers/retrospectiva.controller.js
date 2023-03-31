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
  const id_retrospectiva = req.params.retroId;
  const id_usuario = req.params.id_usuario;
  try {
    const [retrospectiva] = await Retrospectiva.fetchOne(
      id_retrospectiva,
      id_usuario
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

exports.getTags = async (req, res) => {
  try {
    const [tags] = await Retrospectiva.fetchTags(req.params.id);
    res.json(tags);
  } catch (err) {
    console.log(err);
  }
};

exports.getRetrospectivasByUserId = async (req, res, next) => {
  const userId = req.query.id_usuario;

  try {
    const [rows] = await Retrospectiva.fetchRetrospectivasByUserId(
      userId
    );
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: 'Error al obtener las retrospectivas' });
  }
};
