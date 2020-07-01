const express = require("express");
const router = express.Router();
const facultyRoutes = require("./Faculty/faculty");
const studentRoutes = require("./Student/student");
const adminRoutes = require("./Admin/admin");
const managementRoutes = require('./Management/management')
router.get("/", (req, res) => {
  res.render("index");
});



router.use("/faculty", facultyRoutes);
router.use("/student", studentRoutes);
router.use("/admin", adminRoutes);
router.use('/management', managementRoutes);
module.exports = router;
