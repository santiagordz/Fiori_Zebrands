const express = require('express');
const router = express.Router();
const issuesJira_controller = require('../controllers/issues.controller');


router.get('/updated', issuesJira_controller.fetchIssuesJiraUpdated);
router.get('/', issuesJira_controller.getIssuesJira);
router.post('/', issuesJira_controller.postIssuesJira);

module.exports = router;
