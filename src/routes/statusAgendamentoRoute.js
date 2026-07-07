const express = require("express");
const router = express.Router();
const statusAgendamentoController = require("../controllers/statusAgendamentoController");

router.get("/", statusAgendamentoController.getAll);
router.post("/", statusAgendamentoController.create);
router.put("/:id", statusAgendamentoController.update);
router.delete("/:id", statusAgendamentoController.delete);

module.exports = router;