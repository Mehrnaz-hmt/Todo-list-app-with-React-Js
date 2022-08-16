import React from "react";

export default function Todo({ todo, onComplete,onDelete }) {
  // console.log(todo)
  return (
    <div className="todo" key={todo.id}>
      <div onClick={onComplete} className={todo.isCompleted ? "completed" : ""}>{todo.text}</div>
      <div>
        <button onClick={onDelete}>Delete</button>
        <button>Completed</button>
      </div>
    </div>
  );
}
