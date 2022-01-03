const { Router } = require("express");

const hospitaisController = require("../controllers/hospitais.controller");
const {
  hospitaisSchema,
  hospitalConvenios,
} = require("../middlewares/schemas");
const middleware = require("../middlewares/validationSchemas");

const router = Router();

router.get("/", hospitaisController.findAll);
router.get("/:id", hospitaisController.findOne);
router.post("/", middleware(hospitaisSchema), hospitaisController.create);
router.put("/:id", middleware(hospitaisSchema), hospitaisController.update);
router.delete("/:id", hospitaisController.delete);
router.post(
  "/convenios/:id",
  middleware(hospitalConvenios),
  hospitaisController.setConvenios
);

module.exports = router;
