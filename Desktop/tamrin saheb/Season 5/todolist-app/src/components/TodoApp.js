import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeHandler = (id) => {
    let index = todos.findIndex((item) => item.id === id);
    const selectedTodo = { ...todos[index] }; //Do not Mutate!
    // console.log(selectedTodo)  //{id: 600, text: '111', isCompleted: false}
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    // console.log(selectedTodo)  //{id: 600, text: '111', isCompleted: true}
    console.log(todos);
    let updatedTodos = [...todos]; // New List of Todos
    console.log(updatedTodos);
    // console.log(todos)
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = (id) => {
    console.log(id);
  };
  return (
    <div className="container">
      <TodoForm submitTodo={addTodo} />
      <TodoList
        onDelete={deleteHandler}
        todos={todos}
        onComplete={completeHandler}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
}
