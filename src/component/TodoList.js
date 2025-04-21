import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValues, setInputValues] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    if (inputValues.trim() === "") return

    const newTodo = { id: Math.random(), text: inputValues };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValues("");
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-success-100 p-4">
      <div className="w-full max-w-md bg-secondary rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">
          📝 To-Do List
        </h1>

        <form onSubmit={addTodo} className="flex space-x-2">
          <input
            type="text"
            value={inputValues}
            onChange={(e) => setInputValues(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter a new task..."
          />
          <button
            type="submit"
            className="bg-dark-500 text-black px-4 py-2 rounded-lg hover:bg-success-600 transition"
          >
            Add
          </button>
        </form>

        <div className="mt-4">
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center">No tasks added yet.</p>
          ) : (
            todos.map((t) => (
              <TodoItem key={t.id} todo={t} removeTodo={removeTodo} />
            ))
          )}

          <br></br>
        </div>
      </div>
    </div>
  );
}
