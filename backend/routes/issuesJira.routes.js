const express = require('express');
const router = express.Router();
const issuesJira_controller = require('../controllers/issues.controller');

router.get('/', issuesJira_controller.getIssuesJira);

module.exports = router;