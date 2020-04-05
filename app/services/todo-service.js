import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/robert/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get().then(res => {
      console.log(res.data.data);
      let todos = res.data.data.map(rawTodoData => new Todo(rawTodoData));
      store.commit("todos", todos);
    });
  }

  addTodoAsync(todo) {
    console.log(todo);
    todoApi
      .post("", todo)
      .then(res => {
        let newTodo = new Todo(res.data.data);
        let todos = [newTodo, ...store.State.todos];
        store.commit("todos", todos);
      })
      .catch(err => console.error(err));
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    if (todo && todo.completed == false) {
      todo.completed = true;
    } else {
      todo.completed = false;
    }
    todoApi
      .put(todoId, todo)
      .then(res => {
        this.getTodos();
      })
      .catch(err => console.error(err));
  }

  removeTodoAsync(todoId) {
    todoApi
      .delete(todoId)
      .then(res => {
        console.log(res.data);
        this.getTodos();
      })
      .catch(err => console.error(err));
  }
}

const todoService = new TodoService();
export default todoService;
