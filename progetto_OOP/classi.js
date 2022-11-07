// ECMAScript 2015 (ES6)

class Todo {
  constructor(title, time) {
    this.title = title;
    this.time = time;
  }
}

class UI {
  // Aggiungi Todo
  addTodo(todo) {
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
  }

  // Elimina Todo
  removeTodo(target) {
    // console.log(target)
    if (target.className === "delete") {
      target.parentElement.remove();
    }
  }

  // Clear Input
  clearInput() {
    const todoTitle = document.getElementById("title");
    const todoTime = document.getElementById("time");
    todoTitle.value = "";
    todoTime.value = "";
  }
}

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

// console.log(new UI());
