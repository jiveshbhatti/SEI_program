var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");

// load the env vars
require("dotenv").config();

// create the Express app
var app = express();

// connect to the MongoDB with mongoose
require("./config/database");
require("./config/passport");

// require our routes
var indexRoutes = require("./routes/index");
var studentsRoutes = require("./routes/students");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "SEIRocks!",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// mount all routes with appropriate base paths
app.use("/", indexRoutes);
app.use("/", studentsRoutes);

// invalid request, send 404 page
app.use(function (req, res) {
  res.status(404).send("Cant find that!");
});

module.exports = app;
