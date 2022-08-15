import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    // setTodos(input)
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
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    let updatedTodos = [...todos]; //clone Todos
    //console.log(updatedTodos);
    // console.log(todos)
    updatedTodos[index] = selectedTodo;

    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} onComplete={completeHandler} />
    </div>
  );
}
