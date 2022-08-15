import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos,onComplete }) {
  const renderTodos = () => {
    if (todos.length === 0) {
      return <p>Add some Todos!</p>;
    }
    return todos.map((todo) => {
      return <Todo key={todo.id} todo={todo} onComplete={() => onComplete(todo.id)}/>;
    });
  };
  return <div>{renderTodos()}</div>;
}
