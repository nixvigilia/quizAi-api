const AdminController = require("../controllers/AdminController");
const {verifyToken} = require("../middleware/adminMiddleware");

const express = require("express");
const router = express.Router();

// user
router.post("/admin/login", AdminController.loginAdmin);
router.post("/admin/register", AdminController.registerAdmin);
router.get("/admin/user", verifyToken, AdminController.getAdminDetails);
router.post("/admin/create/quiz", verifyToken, AdminController.setUpQuiz);
router.get("/admin/quizzes", verifyToken, AdminController.getQuizzes);

module.exports = router;
