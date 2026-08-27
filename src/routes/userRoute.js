const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticateToken, authorizePerfil } = require("../middlewares/authMiddleware");

router.get("/", authenticateToken, authorizePerfil("admin"), userController.getAll);
router.post("/", authenticateToken, authorizePerfil("admin"), userController.create);
router.put("/:id", authenticateToken, authorizePerfil("admin"), userController.update);
router.delete("/:id", authenticateToken, authorizePerfil("admin"), userController.delete);

module.exports = router;