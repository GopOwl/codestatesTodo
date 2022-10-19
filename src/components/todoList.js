import React from "react";
import TodoItem from "./todoItem";
import './todoList.css';

function TodoList({todos, onCheckToggle}) {
    return (
        <div className="TodoList">
            {todos.map(todo => 
            (<TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle}/>))}
        </div>
    )
};

export default TodoList;