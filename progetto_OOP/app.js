// ECMAScript 2009 (ES5)

// Constructor Todo
function Todo(title, time) {
  this.title = title;
  this.time = time;
}

// Constructor UI
function UI() {}

// Aggiungi Todo
UI.prototype.addTodo = function (todo) {
  //   console.log(todo);
  const todoList = document.getElementById("todo-list");

  // creare elemento tr
  const row = document.createElement("tr");

  //inserire dati
  row.innerHTML = `
  <td>${todo.title}</td>
  <td>${todo.time}</td>
  <span class="delete" href="#">X</span>
  `;

  //   console.log(row);

  todoList.appendChild(row);
};

// Elimina Todo
UI.prototype.removeTodo = function (target) {
  // console.log(target)
  if (target.className === "delete") {
    target.parentElement.remove();
  }
};

// Clear Input
UI.prototype.clearInput = function () {
  const todoTitle = document.getElementById("title");
  const todoTime = document.getElementById("time");
  todoTitle.value = "";
  todoTime.value = "";
};

// Event listener aggiungi Todo

document.getElementById("todo-form").addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  // Prendere i valori del form
  const todoTitle = document.getElementById("title").value;
  const todoTime = document.getElementById("time").value;

  // Creare istanza Todo
  const todo = new Todo(todoTitle, todoTime);

  // Creare istanza UI
  const ui = new UI();

  // Aggiungi Todo
  ui.addTodo(todo);

  // Clear Input
  ui.clearInput();
}

// Event listener rimuovi Todo
document.getElementById("todo-list").addEventListener("click", deleteTodo);

function deleteTodo(e) {
  const ui = new UI();

  ui.removeTodo(e.target);
}
