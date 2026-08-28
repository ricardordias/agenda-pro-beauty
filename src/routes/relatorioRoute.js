const express = require("express");
const router = express.Router();
const relatorioController = require("../controllers/relatorioController");
const { authenticateToken, authorizePerfil } = require("../middlewares/authMiddleware");

router.get("/total_agendamentos", authenticateToken, authorizePerfil("admin"), relatorioController.totalAgendamentos);
router.get("/servicos_mais_solicitados", authenticateToken, authorizePerfil("admin"), relatorioController.servicosMaisSolicitados);
router.get("/profissionais_mais_requisitados", authenticateToken, authorizePerfil("admin"), relatorioController.profissionaisMaisRequisitados);

module.exports = router;
