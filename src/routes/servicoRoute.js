const express = require("express");
const router = express.Router();
const servicoController = require("../controllers/servicoController");

router.get("/", servicoController.getAll);
router.post("/", servicoController.create);
router.put("/:id", servicoController.update);
router.delete("/:id", servicoController.delete);

module.exports = router;