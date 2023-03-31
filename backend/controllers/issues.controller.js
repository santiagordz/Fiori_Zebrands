const issuesModel = require('../models/issues.model')
const db = require('../database/db');

exports.getIssuesJira = async (req, res, next) => {
    try {
        const issuesJira = await issuesModel
        .fetchIssuesJira()
        .then(([rows, fieldData]) => {
            res.json(rows);
          });

    } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ message: 'Error al obtener los usuarios.' });
      }


}