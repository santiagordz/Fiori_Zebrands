const express = require('express');
const router = express.Router();
const issuesJira_controller = require('../controllers/issues.controller');

router.get('/updated', issuesJira_controller.fetchIssuesJiraUpdated);
router.get('/api', issuesJira_controller.getIssuesJira);
router.post('/api', issuesJira_controller.postIssuesJira);
router.get('/last-fetch', issuesJira_controller.getLastFetch);

module.exports = router;
