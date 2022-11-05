const taskInput = document.querySelector("#input");
const inputButton = document.querySelector("#input-button");
const taskList = document.querySelector("#task-list");

inputButton.addEventListener("click", addTask);
taskList.addEventListener("click", removeTask);

function addTask(e) {
  e.preventDefault();

  if (taskInput.value === "") {
    alert("scrivi qualcosa");
  }

  // Creare nuovo li e aggiungere classe
  const li = document.createElement("li");
  li.className = "task";

  // Creare nuovo text node e metterlo dentro li
  li.appendChild(document.createTextNode(taskInput.value));

  // creare link
  const link = document.createElement("a");

  // aggiungere classe a <a>
  link.className = "delete-todo";

  // aggiungi X al <a></a>
  link.innerHTML = "<span> X </span>";

  // mettere link nel li
  li.appendChild(link);

  // mettere li dentro ul
  taskList.appendChild(li);

  taskInput.value = "";
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-todo")) {
    e.target.parentElement.parentElement.remove();
  }
}
