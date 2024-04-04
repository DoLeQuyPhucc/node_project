const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, required: true, maxLength: 255 },
    description: { type: String, required: true, maxLength: 600 },
    image: { type: String, required: true, maxLength: 255 },
    videoID: { type: String, required: true, maxLength: 255 },
    level: { type: String, required: true, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

//Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("Course", Course);
