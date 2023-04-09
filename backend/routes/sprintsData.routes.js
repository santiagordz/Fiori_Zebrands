const express = require('express');
const router = express.Router();
const sprintsDataController = require('../controllers/sprintsDataMetrica.controller');

router.get('/:ids', sprintsDataController.fetchSprintsByIds);
router.get(
  '/storypoints/:ids',
  sprintsDataController.fetchStoryPoints
);

router.get('/user/:id', sprintsDataController.fetchUserIssues);
router.get(
  '/userstorypoints/:id',
  sprintsDataController.fetchUserStoryPoints
);

module.exports = router;
