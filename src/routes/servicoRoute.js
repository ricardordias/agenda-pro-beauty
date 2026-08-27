const express = require("express");
const router = express.Router();
const servicoController = require("../controllers/servicoController");
const { authenticateToken, authorizePerfil } = require("../middlewares/authMiddleware");

router.get("/", authenticateToken, authorizePerfil("admin"), servicoController.getAll);
router.get("/area/:area_id", authenticateToken, authorizePerfil("admin"), servicoController.getServicosPorArea);
router.post("/", authenticateToken, authorizePerfil("admin"), servicoController.create);
router.put("/:id", authenticateToken, authorizePerfil("admin"), servicoController.update);
router.delete("/:id", authenticateToken, authorizePerfil("admin"), servicoController.delete);

module.exports = router;