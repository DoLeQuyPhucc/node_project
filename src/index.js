const path = require("path");
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const port = 5000;
const routes = require("./routes");
const morgan = require("morgan");

//template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

routes(app);

// app.use(morgan("combined"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
