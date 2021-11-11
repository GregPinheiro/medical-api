const { Router } = require("express");

const cirurgiasController = require("../controllers/cirurgias.controller");
const { cirurgiasSchema } = require("../middlewares/schemas");
const middleware = require("../middlewares/validationSchemas");

const router = Router();

router.get("/", cirurgiasController.findAll);
router.get("/:id", cirurgiasController.findOne);
router.post("/", middleware(cirurgiasSchema), cirurgiasController.create);
router.put("/:id", middleware(cirurgiasSchema), cirurgiasController.update);
router.delete("/:id", cirurgiasController.delete);

module.exports = router;
