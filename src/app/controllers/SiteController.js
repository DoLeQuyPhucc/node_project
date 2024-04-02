const Course = require("../models/Course");

class SiteController {
  // [GET] /
  index(req, res) {
    Course.find({})
      .then((courses) => res.json(courses))
      .catch((err) => {
        // handle error here
        console.error(err);
        res.status(500).send("Server Error");
      });
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
