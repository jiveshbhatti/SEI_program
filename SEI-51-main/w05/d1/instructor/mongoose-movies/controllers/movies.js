const Movie = require("../models/movie");

function newMovie(req, res) {
  res.render("movies/new.ejs");
}

function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing;
  // remove whitespace next to commas
  req.body.cast = req.body.cast.replace(/\s*,\s*/g, ",");
  if (req.body.cast) req.body.cast = req.body.cast.split(",");

  Movie.create(req.body, function (err, movie) {
    if (err) return res.render("movies/new.ejs");
    console.log(movie);
    res.redirect("/movies");
  });
}

function index(req, res) {
  Movie.find({}, function (err, movies) {
    res.render("movies/index.ejs", { movies });
  });
}

function show(req, res) {
  Movie.findById(req.params.id, function (err, movie) {
    res.render("movie/show.ejs", { movie });
  });
}

module.exports = {
  new: newMovie,
  create,
  index,
  show,
};
