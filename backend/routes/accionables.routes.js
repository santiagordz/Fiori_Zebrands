const express = require("express");
const router = express.Router();

const accionablesController = require("../controllers/accionables.controller");

router.get("/:id", accionablesController.getAccionablesByUserId);
router.post("/", accionablesController.createAccionable);

module.exports = router;
