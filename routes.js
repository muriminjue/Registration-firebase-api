//modules
const express = require("express");
const router = express.Router();
const cors = require("cors");

//setup cors
router.use(cors());

//files
const admins = require("./app/controllers/admins")
const tutors = require("./app/controllers/tutors")
const students = require("./app/controllers/students")

//routes
//admins
router.get("/alladmin", admins.get)
router.post("/newadmin", admins.add)

//tutors
router.get("/tutors", tutors.get)
router.post("/tutors", tutors.add)
router.post("/tutorreview", tutors.addreview)
router.get("/tutorreview", tutors.getreview)

//Students
router.get("/students", students.get)
router.post("/students", students.add)
router.post("/studentreview", students.addreview)
router.get("/studentreview", students.getreview)

module.exports = router;