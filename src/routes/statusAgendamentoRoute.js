const express = require("express");
const router = express.Router();
const statusAgendamentoController = require("../controllers/statusAgendamentoController");

router.get("/", statusAgendamentoController.getAll);
router.get("/:id", statusAgendamentoController.getStatusAgendamentoPorId);
router.post("/", statusAgendamentoController.create);
router.put("/:id", statusAgendamentoController.update);
router.delete("/:id", statusAgendamentoController.delete);

module.exports = router;