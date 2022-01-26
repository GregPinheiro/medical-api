const { Router } = require("express");

const acompCirurgicosController = require("../controllers/acompCirurgicos.controller");
const { acompCirurgicos } = require("../middlewares/schemas");
const middleware = require("../middlewares/validationSchemas");

const router = Router();

router.get("/", acompCirurgicosController.findAll);
router.get("/:id", acompCirurgicosController.findOne);
router.post("/", middleware(acompCirurgicos), acompCirurgicosController.create);
router.put(
  "/:id",
  middleware(acompCirurgicos),
  acompCirurgicosController.update
);
router.delete("/:id", acompCirurgicosController.delete);

module.exports = router;
