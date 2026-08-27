const express = require("express");
const router = express.Router();
const horarioTrabalhoController = require("../controllers/horarioTrabalhoController");
const { authenticateToken, authorizePerfil } = require("../middlewares/authMiddleware");

router.get("/", authenticateToken, authorizePerfil("admin"), horarioTrabalhoController.getAll);
router.post("/", authenticateToken, authorizePerfil("admin"), horarioTrabalhoController.create);
router.put("/:id", authenticateToken, authorizePerfil("admin"), horarioTrabalhoController.update);
router.delete("/:id", authenticateToken, authorizePerfil("admin"), horarioTrabalhoController.delete);

module.exports = router;