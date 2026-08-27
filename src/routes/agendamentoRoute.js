const express = require("express");
const router = express.Router();
const agendamentoController = require("../controllers/agendamentoController");
const slotsController = require("../controllers/slotsController");
const { authenticateToken, authorizePerfil } = require("../middlewares/authMiddleware");

router.get("/disponibilidade", slotsController.consultarDisponibilidade);
router.get("/usuario/:id/status/:statusId", authenticateToken, authorizePerfil("admin"), agendamentoController.getByUsuarioAndStatus);
router.get("/profissional/:id/status/:statusId", authenticateToken, authorizePerfil("admin"), agendamentoController.getByProfissionalAndStatus);
router.get("/usuario/:id", authenticateToken, authorizePerfil("admin"), agendamentoController.getByUsuario);
router.get("/profissional/:id", authenticateToken, authorizePerfil("admin"), agendamentoController.getByProfissional);
router.get("/status/:id", authenticateToken, authorizePerfil("admin"), agendamentoController.getByStatus);
router.get("/", authenticateToken, authorizePerfil("admin"), agendamentoController.getAll);
router.post("/", authenticateToken, authorizePerfil("admin"), agendamentoController.create);
router.put("/:id", authenticateToken, authorizePerfil("admin"), agendamentoController.update);
router.delete("/:id", authenticateToken, authorizePerfil("admin"), agendamentoController.delete);

module.exports = router;