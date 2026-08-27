const express = require("express");
const router = express.Router();
const areaController = require("../controllers/areaController");
const { authenticateToken, authorizePerfil } = require("../middlewares/authMiddleware");

router.get("/", authenticateToken, authorizePerfil("admin"), areaController.getAll);
router.post("/", authenticateToken, authorizePerfil("admin"), areaController.create);
router.put("/:id", authenticateToken, authorizePerfil("admin"), areaController.update);
router.delete("/:id", authenticateToken, authorizePerfil("admin"), areaController.delete);

module.exports = router;