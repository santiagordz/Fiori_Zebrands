const express = require('express');
const router = express.Router();
const retrospectivaController = require('../controllers/retrospectiva.controller');

router.get('/', retrospectivaController.getAllRetrospectivas);
router.get('/panelRetros', retrospectivaController.getPanelRetros);
router.get('/one/:id', retrospectivaController.getOne);
router.get('/questions/:id', retrospectivaController.getQuestions);
router.get('/panelRetrosByUser', retrospectivaController.getRetrospectivasByUserId);


module.exports = router;
