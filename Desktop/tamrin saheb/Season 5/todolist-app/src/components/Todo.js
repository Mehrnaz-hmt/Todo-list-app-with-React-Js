import React from "react";

export default function Todo({ todo, onComplete,onDelete,onEdit }) {
  // console.log(todo)
  return (
    <div className="todo" key={todo.id}>
      <div onClick={onComplete} className={todo.isCompleted ? "completed" : ""}>{todo.text}</div>
      <div>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onEdit}>Edit</button>
      </div>
    </div>
  );
}
