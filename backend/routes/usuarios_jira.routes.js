const express = require('express');
const router = express.Router();
const usuarios_jira_controller = require('../controllers/usuarios_jira.controller');

router.get('/', usuarios_jira_controller.getJiraUsers);
router.get('/one/:id_jira', usuarios_jira_controller.getOneJiraUser);
router.post('/', usuarios_jira_controller.postJiraUsers);

module.exports = router;
