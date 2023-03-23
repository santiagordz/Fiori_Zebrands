const express = require('express');
const router = express.Router();
const retrospectivaController = require('../controllers/retrospectivaController');

router.get('/', retrospectivaController.getAllRetrospectivas);
router.get('/panelRetros', retrospectivaController.getPanelRetros);
router.get('/one/:id', retrospectivaController.getOne);
router.get('/questions/:id', retrospectivaController.getQuestions);

module.exports = router;
