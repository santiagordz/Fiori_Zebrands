const express = require('express');
const router = express.Router();
const epicsController = require('../controllers/epics.controller');

router.get('/', epicsController.getEpicsJira);
router.get('/issues', epicsController.getEpicsWithIssues);
router.post('/', epicsController.postEpicsJira);

module.exports = router;
