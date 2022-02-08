const { Router } = require("express");

const reembolsoStatusController = require("../controllers/reembolsoStatus.controller");

const router = Router();

router.get("/", reembolsoStatusController.findAll);

module.exports = router;
