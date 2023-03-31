const express = require('express');
const router = express.Router();
const usuarios_jira_controller = require('../controllers/usuarios_jira.controller');

router.get('/', usuarios_jira_controller.getJiraUsers);
router.get('/fetch', usuarios_jira_controller.postJiraUsers);

module.exports = router;
