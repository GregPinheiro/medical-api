const { Router } = require("express");

const conveniosController = require("../controllers/convenios.controller");
const { conveniosSchema } = require("../middlewares/schemas");
const middleware = require("../middlewares/validationSchemas");

const router = Router();

router.get("/", conveniosController.findAll);
router.get("/:id", conveniosController.findOne);
router.post("/", middleware(conveniosSchema), conveniosController.create);
router.put("/:id", middleware(conveniosSchema), conveniosController.update);
router.delete("/:id", conveniosController.delete);

module.exports = router;
