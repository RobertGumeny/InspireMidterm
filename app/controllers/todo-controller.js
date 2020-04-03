import TodoService from "../services/todo-service.js";
import store from "../store.js";

function _drawTodos() {
  let template = "";
  let todos = store.State.todos;

  todos.forEach(todo => (template += todo.todoTemplate));
  document.getElementById("todos").innerHTML = template;
  document.getElementById(
    "todo-counter"
  ).innerText = store.State.todos.length.toString();
}

export default class TodoController {
  constructor() {
    TodoService.getTodos();
    store.subscribe("todos", _drawTodos);
  }

  addTodo(e) {
    e.preventDefault();
    let form = e.target;
    let todo = {
      description: form.description.value
    };
    TodoService.addTodoAsync(todo);
    form.reset();
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
