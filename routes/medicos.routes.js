const { Router } = require("express");

const medicosController = require("../controllers/medicos.controller");
const { medicosSchema } = require("../middlewares/schemas");
const middleware = require("../middlewares/validationSchemas");

const router = Router();

router.get("/", medicosController.findAll);
router.get("/:id", medicosController.findOne);
router.post("/", middleware(medicosSchema), medicosController.create);
router.put("/:id", middleware(medicosSchema), medicosController.update);
router.delete("/:id", medicosController.delete);

module.exports = router;
