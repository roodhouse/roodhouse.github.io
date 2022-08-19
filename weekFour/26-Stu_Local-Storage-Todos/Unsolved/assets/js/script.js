var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // clears the todoslist element
  // renders the number of to-dos on the list
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  // goes through the to-do list and creates an li for each todo that it appends to the ul.
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
function init() { // On page load, pulls the data out of local storage, parses it and calls the rendertodo fuction
  // TODO: What is the purpose of the following line of code?
  var storedTodos = JSON.parse(localStorage.getItem("todos")); // retreive the info from the localstaorage and ssaves a variable
  // TODO: Describe the functionality of the following `if` statement.
  if (storedTodos !== null) { // check if storedTods varabile is empty or not 
    todos = storedTodos; // sets value of the storedTools
  }
  // TODO: Describe the purpose of the following line of code.
  // calls the renderTodo function
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  localStorage.setItem("todos", JSON.stringify(todos)); // storing the info coming from the todo varaible
}
// TODO: Describe the purpose of the following line of code.
todoForm.addEventListener("submit", function(event) { // adds an event lister as the submit click
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  if (todoText === "") { // if empty then cacnel it out
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText); // pushes the todo text into the todo array
  todoInput.value = ""; // clears the value of the input field
 
  // TODO: What will happen when the following functions are called?
  storeTodos(); // updates the local storage
  renderTodos(); // makes it show on the screen
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function(event) { // adds an event lister as the submit click
  var element = event.target; // target is property on the evt object and will tell you what was clicked on
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) { // making sure you are clicking the button
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos(); // updates the local storage
    renderTodos(); // makes it show on the screen
  }
});

init();
