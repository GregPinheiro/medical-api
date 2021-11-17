const { Router } = require("express");

const pacientesController = require("../controllers/pacientes.controller");
const { pacientesSchema } = require("../middlewares/schemas");
const middleware = require("../middlewares/validationSchemas");

const router = Router();

router.get("/", pacientesController.findAll);
router.get("/:id", pacientesController.findOne);
router.post("/", middleware(pacientesSchema), pacientesController.create);
router.put("/:id", middleware(pacientesSchema), pacientesController.update);
router.delete("/:id", pacientesController.delete);

module.exports = router;
