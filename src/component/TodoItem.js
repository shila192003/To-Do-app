import React from "react";
import "./TodoItem.css"; // Import the CSS file

export default function TodoItem({ todo, removeTodo }) {
  return (
    <div className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button className="delete-btn" onClick={() => removeTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
}
