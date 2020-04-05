export default class Todo {
  constructor(data) {
    this.completed = data.completed;
    this.description = data.description;
    this._id = data._id;
  }
  get todoTemplate() {
    if (this.completed == true) {
      return /*html*/ `
      <li class="list-group-item todo-list-item border-0 m-0">
      <input type="checkbox" checked="checked" id="todo-toggle" onclick="app.todoController.toggleTodoStatus('${this._id}')">
      <span class="todo-item-complete">${this.description}</span>
      <button
        class="close text-danger ml-auto"
        onclick="app.todoController.removeTodo('${this._id}')"
      >
      <span>&times;</span>
      </button>
    </li>
      `;
    } else {
      return /*html*/ `
      <li class="list-group-item todo-list-item border-0 m-0">
      <input type="checkbox" id="todo-toggle" onclick="app.todoController.toggleTodoStatus('${this._id}')">
      <span class="todo-item-incomplete">${this.description}</span>
      <button
        class="close text-danger ml-auto"
        onclick="app.todoController.removeTodo('${this._id}')"
      >
      <span>&times;</span>
      </button>
    </li>
      
      `;
    }
  }
}
