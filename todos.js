'use strict';

function displayTodos(){
    console.log('My todos', todos);
}

funtion addTodo(){
    todos.push(todos);
    displayTodos();
}

function changeTodos(position, newValue){
    todos[position] = newValue;
    displayTodos();
}

function deleteTodo(position){
    todos.splice(position, 1);
    displayTodos();
}

let todoList = {
    todos = ['item1','item2',"item3"],
}