const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/node_project_dev");
    console.log("Connect to database successfully");
  } catch (error) {
    console.log("Error connecting to database");
    console.log(error);
  }
}

module.exports = { connect };
