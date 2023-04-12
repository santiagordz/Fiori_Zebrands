const express = require('express');
const router = express.Router();
const sprintsDataController = require('../controllers/sprintsDataMetrica.controller');

router.get('/:ids', sprintsDataController.fetchSprintsByIds);
router.get(
  '/storypoints/:ids',
  sprintsDataController.fetchStoryPoints
);

router.get('/user/:id/:ids', sprintsDataController.fetchUserIssues);
router.get('/user/:id', sprintsDataController.fetchUserIssuesSolo);

router.get(
  '/userstorypoints/:id/:ids',
  sprintsDataController.fetchUserStoryPoints
);

router.get('/epic/:id', sprintsDataController.fetchIssuesByEpic);
router.get('/user/:id', sprintsDataController.fetchUserIssuesSolo);
router.get(
  '/userstorypoints/:id',
  sprintsDataController.fetchUserStoryPointsSolo
);

router.get(
  '/lastsprintsstorypoints/:id',
  sprintsDataController.fetchPersonalStoryPointsLastSprints
);

router.get(
  '/lastsprintstodostorypoints/:id',
  sprintsDataController.fetchPersonalToDoStoryPointsLastSprints
);

router.get(
  '/lastsprintsdonestorypointsglobal/',
  sprintsDataController.fetchDoneStoryPointsLastSprints
);

module.exports = router;
