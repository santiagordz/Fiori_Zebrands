const express = require("express");
const router = express.Router();

const accionablesController = require("../controllers/accionables.controller");

router.get("/:id", accionablesController.getAccionableById);
router.post("/", accionablesController.createAccionables);
