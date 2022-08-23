const { v4: uuidv4 } = require("uuid");

const todos = [
  { id: uuidv4(), todo: "Feed Dogs", done: true },
  { id: uuidv4(), todo: "Learn Express", done: false },
  { id: uuidv4(), todo: "Buy Milk", done: false },
];

function getAll() {
  return todos;
}

function addTodo(todo) {
  // create a unique ID for todo.id
  todo.id = uuidv4();
  todos.push(todo);
}

function getTodo(id) {
  return todos.find((t) => id === t.id);
}

function deleteOne(id) {
  const idx = todos.findIndex((t) => t.id === id);
  if (idx === -1) return;
  const removedTodo = todos.splice(idx, 1);
  return removedTodo;
}

//t = { todo: "some val", done: false }
function updateOne(id, t) {
  let currentTodo = getTodo(id);
  if (currentTodo) {
    currentTodo.todo = t.todo;
    currentTodo.done = !!t.done;
    return true;
  }
  return false;
}

module.exports = {
  getAll,
  addTodo,
  getTodo,
  deleteOne,
  updateOne,
};
