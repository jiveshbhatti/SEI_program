const Todo = require("../models/todo");
const { request } = require("../server");

function index(req, res) {
  let todosObject = {
    //todos: [{todo: "Feed Dogs", done: true}]
    todos: Todo.getAll(),
    time: req.time,
  };

  res.render("todos/index.ejs", todosObject);
}

function newTodo(req, res) {
  res.render("todos/new.ejs");
}

function create(req, res) {
  console.log(req.body);
  const newTodo = {
    todo: req.body.todo,
    done: false,
  };
  //create the todo
  Todo.addTodo(newTodo);
  res.redirect("/todos");
}

function show(req, res) {
  //See what ID is being requested for the Todo
  const id = req.params.id;
  //Get that Todo through the model
  const requestedTodo = Todo.getTodo(id);

  if (requestedTodo) {
    //Render a view with that specific Todo
    res.render("todos/show.ejs", requestedTodo);
  } else {
    res.send("404: Todo not found");
  }
}

function deleteTodo(req, res) {
  if (Todo.deleteOne(req.params.id)) {
    res.redirect("/todos");
  } else {
    res.send("404: Todo not found");
  }
}

function edit(req, res) {
  const requestedTodo = Todo.getTodo(req.params.id);
  res.render("todos/edit.ejs", requestedTodo);
}

function update(req, res) {
  Todo.updateOne(req.params.id, req.body);
  res.redirect("/todos");
}

module.exports = {
  index,
  new: newTodo,
  create,
  show,
  delete: deleteTodo,
  edit,
  update,
};
