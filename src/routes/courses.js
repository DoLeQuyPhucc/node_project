const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/CoursesController");

router.get("/createCourse", coursesController.createCourse);
router.post("/store", coursesController.store);
router.get("/:id/editCourse", coursesController.editCourse);
router.put("/:id", coursesController.updateCourse);
router.get("/:slug", coursesController.showCourse);

module.exports = router;
