const express = require("express");
const router = express.Router();
const horarioBloqueadoController = require("../controllers/horarioBloqueadoController");

router.get("/", horarioBloqueadoController.getAll);
router.post("/", horarioBloqueadoController.create);
router.put("/:id", horarioBloqueadoController.update);
router.delete("/:id", horarioBloqueadoController.delete);

module.exports = router;