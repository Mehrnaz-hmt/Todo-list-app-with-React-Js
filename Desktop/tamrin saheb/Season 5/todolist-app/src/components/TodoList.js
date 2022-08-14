import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  const renderTodos = () => {
    if (todos.length === 0) {
      return <p>Add some Todos!</p>;
    }
    return todos.map((todo) => {
      return <Todo key={todo.id} todo={todo} />;
    });
  };
  return <div>{renderTodos()}</div>;
}
