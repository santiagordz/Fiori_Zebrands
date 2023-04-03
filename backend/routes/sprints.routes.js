const express = require('express');
const router = express.Router();
const sprintsController = require('../controllers/sprint.controller');

router.get('/', sprintsController.getSprintsJira);
router.post('/', sprintsController.postSprintsJira)

module.exports = router