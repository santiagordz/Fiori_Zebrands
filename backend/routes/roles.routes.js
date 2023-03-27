const express = require('express');
const router = express.Router();

const RollesController = require('../controllers/roles.controller');

router.get('/:id', RollesController.getRolById);
router.get('/', RollesController.getAllRoles);

module.exports = router;
