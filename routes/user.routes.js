const { Router } = require("express");

const userController = require("../controllers/user.controller");
const { signinSchema } = require("../middlewares/schemas");
const middleware = require("../middlewares/validationSchemas");

const router = Router();

router.post("/signin", middleware(signinSchema), userController.signin);

router.get("/", (req, res) => res.status(200).json("ok"));
router.post("/");
router.put("/");
router.put("/");

module.exports = router;
