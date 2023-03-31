const usuarios_jiraModel = require('../models/usuarios_jira.model');
const db = require('../database/db');

exports.getJiraUsers = async (req, res, next) => {
  try {
    const usuarios = await usuarios_jiraModel.fecthJiraUsers();
    res.json({ usuarios });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error al obtener los usuarios.' });
  }
};

exports.postJiraUsers = async (req, res, next) => {
  const usuarios = await usuarios_jiraModel.fetchJiraUsers();
  for (let usuario of usuarios) {
    await usuarios_jiraModel.postJiraUser(
      usuario.accountId,
      usuario.displayName
    );
  }
};
