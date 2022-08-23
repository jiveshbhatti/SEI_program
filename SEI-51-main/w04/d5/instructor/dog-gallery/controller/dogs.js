var createError = require("http-errors");
const Dog = require("../models/dog");

function index(req, res) {
  const dogs = Dog.getAll();
  res.render("dogs/index.ejs", { dogs });
}

function show(req, res, next) {
  //We need to get that dog
  const dog = Dog.getOne(req.params.id);
  if (!dog) {
    next(createError(404));
  }
  //We need to send that dogs info to the show ejs file
  res.render("dogs/show.ejs", dog);
}

function deleteDog(req, res, next) {
  const deletedDog = Dog.deleteOne(req.params.id);
  if (!deletedDog) {
    next(createError(404));
  }
  res.redirect("/dogs");
}

function update(req, res) {
  console.log("update reached with body: ", req.body);
  Dog.updateOne(req.params.id, req.body);
  res.redirect(`/dogs/${req.params.id}`);
}

function create(req, res) {
  console.log("Create reached: ", req.body);
  Dog.createOne(req.body);
  res.redirect("/dogs");
}

function newDog(req, res) {
  res.render("dogs/new.ejs");
}

module.exports = {
  index,
  show,
  delete: deleteDog,
  update,
  create,
  new: newDog,
};
