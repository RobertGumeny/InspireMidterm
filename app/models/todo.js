export default class Todo {
  constructor(data) {
    this.completed = data.completed;
    this.description = data.description;
    this._id = data._id;
  }
  get todoTemplate() {
    return /*html*/ `
    <p>${this.completed}</p>
    <p>${this.description}</p>
    <button onclick="app.todoController.removeTodo('${this._id}')">X</button>
    <button onclick="app.todoController.toggleTodoStatus('${this._id}')">Toggle</button>
    `;
  }
}
