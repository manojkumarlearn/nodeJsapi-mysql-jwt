const express = require("express");
const authenticateToken = require("../middleware/authMiddleware");
const { getAllStudents, getAllStudentsById, createStudent, updateStudent } = require("../controllers/studentController");

//router object
const router = express.Router();

router.use(authenticateToken);

//routes
router.get("/students", getAllStudents);
router.get("/students/:id", getAllStudentsById);
router.post("/students", createStudent);
router.put("/students/:id", updateStudent);

module.exports = router;