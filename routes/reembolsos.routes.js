const { Router } = require("express");

const reembolsosController = require("../controllers/reembolsos.controller");
const { reembolsos } = require("../middlewares/schemas");
const middleware = require("../middlewares/validationSchemas");

const router = Router();

router.get("/", reembolsosController.findAll);
router.get("/:id", reembolsosController.findOne);
router.post("/", middleware(reembolsos), reembolsosController.create);
router.put("/:id", middleware(reembolsos), reembolsosController.update);
router.delete("/:id", reembolsosController.delete);

module.exports = router;
