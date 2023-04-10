const express = require('express');
const router = express.Router();
const retrospectivaController = require('../controllers/retrospectiva.controller');

router.get('/', retrospectivaController.getAllRetrospectivas);
router.get('/panelRetros', retrospectivaController.getPanelRetros);
router.get(
  '/one/:retroId/:id_usuario',
  retrospectivaController.getOne
);
router.get('/questions/:id', retrospectivaController.getQuestions);
router.get(
  '/panelRetrosByUser',
  retrospectivaController.getRetrospectivasByUserId
);
router.get('/tags/:id', retrospectivaController.getTags);
router.put(
  '/finish/:retroId',
  retrospectivaController.finishRetrospectiva
);
router.post('/new', retrospectivaController.newRetrospectiva);
router.get(
  '/details/:retroId',
  retrospectivaController.getDetailedRetrospective
);
router.delete(
  '/delete/:retroId',
  retrospectivaController.deleteRetrospectiva
);

module.exports = router;
