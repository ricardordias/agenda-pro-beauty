const express = require("express");
const router = express.Router();
const agendamentoController = require("../controllers/agendamentoController");
const slotsController = require("../controllers/slotsController");

router.get("/disponibilidade", slotsController.consultarDisponibilidade);
router.get("/usuario/:id", agendamentoController.getByUsuario);
router.get("/profissional/:id", agendamentoController.getByProfissional);
router.get("/status/:id", agendamentoController.getByStatus);
router.get("/", agendamentoController.getAll);
router.post("/", agendamentoController.create);
router.put("/:id", agendamentoController.update);
router.delete("/:id", agendamentoController.delete);

module.exports = router;