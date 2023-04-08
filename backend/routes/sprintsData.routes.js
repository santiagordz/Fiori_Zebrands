const express = require('express');
const router = express.Router();
const sprintsDataController = require('../controllers/sprintsDataMetrica.controller');

router.get('/:ids', sprintsDataController.fetchSprintsByIds);
router.get('/storypoints/:ids', sprintsDataController.fetchStoryPoints);

module.exports = router;
