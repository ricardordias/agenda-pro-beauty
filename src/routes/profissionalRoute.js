const express = require("express");
const router = express.Router();
const profissionalController = require("../controllers/profissionalController");
const { authenticateToken, authorizePerfil } = require("../middlewares/authMiddleware");

router.get("/", authenticateToken, authorizePerfil("admin"), profissionalController.getAll);
router.post("/", authenticateToken, authorizePerfil("admin"), profissionalController.create);
router.put("/:id", authenticateToken, authorizePerfil("admin"), profissionalController.update);
router.delete("/:id", authenticateToken, authorizePerfil("admin"), profissionalController.delete);

module.exports = router;