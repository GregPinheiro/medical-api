const { Router } = require("express");

const consultasController = require("../controllers/consultas.controller");
const { consultasSchema } = require("../middlewares/schemas");
const middleware = require("../middlewares/validationSchemas");

const router = Router();

router.get("/", consultasController.findAll);
router.get("/:id", consultasController.findOne);
router.post("/", middleware(consultasSchema), consultasController.create);
router.put("/:id", middleware(consultasSchema), consultasController.update);
router.delete("/:id", consultasController.delete);

module.exports = router;
