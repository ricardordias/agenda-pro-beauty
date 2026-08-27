const express = require("express");
const router = express.Router();
const statusAgendamentoController = require("../controllers/statusAgendamentoController");
const { authenticateToken, authorizePerfil } = require("../middlewares/authMiddleware");

router.get("/", authenticateToken, authorizePerfil("admin"), statusAgendamentoController.getAll);
router.get("/:id", authenticateToken, authorizePerfil("admin"), statusAgendamentoController.getStatusAgendamentoPorId);
router.post("/", authenticateToken, authorizePerfil("admin"), statusAgendamentoController.create);
router.put("/:id", authenticateToken, authorizePerfil("admin"), statusAgendamentoController.update);
router.delete("/:id", authenticateToken, authorizePerfil("admin"), statusAgendamentoController.delete);

module.exports = router;