const todoList = document.getElementById ('todo-list');
const todoInput = document.getElementById ('todo-input');
const todoButton = document.getElementById ('todo-button');
const todoFilter = document.getElementById ('todo-filter');

const todos = ['evi topla','işi tamamla'];

const getTodosPage = () => {
    todos.forEach((todo) => {
        
    });
}

const createTodoItem = (text) => {

    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item','todo');

    const todoItemLi = document.createElement('li');
    todoItemLi.innerHTML = text;

    const todoItemCheck = document.createElement('i');
    todoItemCheck.classList.add('fas','fa-squara');
    todoItemCheck.setAttribute('onclick','checkTodo(this)');

    const todoItemRemove = document.createElement('i');
    todoItemRemove.classList.add('fas','fa-trash-alt');
    todoItemRemove.setAttribute('onclick','removeTodo(this)');

    todoItem.appendChild(todoItemLi);
    todoItem.appendChild(todoItemCheck);
    todoItem.appendChild(todoItemRemove);
    todoItem.appendChild(todoItem);
}