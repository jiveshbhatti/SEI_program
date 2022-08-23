// Require modules
const express = require("express");
const path = require("path");

// Create the Express app
const app = express();

// Configure the app (app.set)
app.set("view engine", "ejs");
//home/davidbland/Documents/generelassembly/.../intro-express/views
app.set("views", path.join(__dirname, "views"));

// Mount middleware (app.use)

// Mount routes
app.get("/", function (req, res) {
  res.send("<a href='/otherRoute'>Hello Nerds!</a>");
});

app.get("/home", function (req, res) {
  res.render("home");
});

app.get("/otherRoute", function (req, res) {
  res.send("<h1>other route!!</h1>");
});

// app.post()
// app.delete()
// app.put()

// Tell the app to listen on port 3000
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
