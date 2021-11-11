const { Router } = require("express");

const fornecedoresController = require("../controllers/fornecedores.controller");
const { fornecedoresSchema } = require("../middlewares/schemas");
const middleware = require("../middlewares/validationSchemas");

const router = Router();

router.get("/", fornecedoresController.findAll);
router.get("/:id", fornecedoresController.findOne);
router.post("/", middleware(fornecedoresSchema), fornecedoresController.create);
router.put(
  "/:id",
  middleware(fornecedoresSchema),
  fornecedoresController.update
);
router.delete("/:id", fornecedoresController.delete);

module.exports = router;
