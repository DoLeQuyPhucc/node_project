const Course = require("../models/Course");

class CoursesController {
  // [GET] /courses/:slug
  showCourse(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => {
        res.render("courses/showCourse", { course });
      })
      .catch(next);
  }

  // [GET] /courses/create
  createCourse(req, res, next) {
    res.render("courses/createCourse");
  }

  // [POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then((savedCourse) => res.redirect(`/courses/${savedCourse.slug}`))
      .catch((error) => {
        console.error(error);
        res.send("Server error");
      });
  }

  // [GET] /:id/edit
  editCourse(req, res, next) {
    Course.findById(req.params.id)
      .lean()
      .then((course) => {
        res.render("courses/editCourse", { course });
      })
      .catch(next);
  }

  // [PUT] /:id
  updateCourse(req, res, next) {
    req.body.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect(`/me/stored/courses`))
      .catch(next);
  }
}

module.exports = new CoursesController();
