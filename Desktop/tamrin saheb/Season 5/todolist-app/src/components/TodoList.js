import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function TodoList({
  todos,
  onComplete,
  onDelete,
  onUpdateTodo,
}) {
  const [edit, setEdit] = useState({ id: null, text: "", isComplited: false });

  const renderTodos = () => {
    if (todos.length === 0) {
      return <p>Add some Todos!</p>;
    }

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={() => onDelete(todo.id)}
          onComplete={() => onComplete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };

  const editTodo = () => {
    onUpdateTodo(edit.id);
  };
  
  return (
    <div>
      {edit.id ? <TodoForm submitTodo={editTodo} /> : renderTodos()}
    </div>
  );
}
