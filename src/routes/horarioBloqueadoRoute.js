const express = require("express");
const router = express.Router();
const horarioBloqueadoController = require("../controllers/horarioBloqueadoController");
const { authenticateToken, authorizePerfil } = require("../middlewares/authMiddleware");

router.get("/", authenticateToken, authorizePerfil("admin"), horarioBloqueadoController.getAll);
router.post("/", authenticateToken, authorizePerfil("admin"), horarioBloqueadoController.create);
router.put("/:id", authenticateToken, authorizePerfil("admin"), horarioBloqueadoController.update);
router.delete("/:id", authenticateToken, authorizePerfil("admin"), horarioBloqueadoController.delete);

module.exports = router;