const { Router } = require("express");

const medicosController = require("../controllers/medicos.controller");
const { medicosSchema, medicoHospitais } = require("../middlewares/schemas");
const middleware = require("../middlewares/validationSchemas");

const router = Router();

router.get("/", medicosController.findAll);
router.get("/:id", medicosController.findOne);
router.post("/", middleware(medicosSchema), medicosController.create);
router.put("/:id", middleware(medicosSchema), medicosController.update);
router.delete("/:id", medicosController.delete);
router.post(
  "/hospitais/:id",
  middleware(medicoHospitais),
  medicosController.setHospitais
);

module.exports = router;
