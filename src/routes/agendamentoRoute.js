const express = require("express");
const router = express.Router();
const agendamentoController = require("../controllers/agendamentoController");

router.get("/", agendamentoController.getAll);
router.post("/", agendamentoController.create);
router.put("/:id", agendamentoController.update);
router.delete("/:id", agendamentoController.delete);

module.exports = router;