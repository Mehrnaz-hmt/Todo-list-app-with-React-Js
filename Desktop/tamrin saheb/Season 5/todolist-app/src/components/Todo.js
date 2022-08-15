import React from "react";

export default function Todo({ todo, onComplete }) {
  // console.log(todo)
  return (
    <div className="todo" key={todo.id}>
      <div className={todo.isCompleted ? "completed" : ""}>{todo.text}</div>
      <div>
        <button>Edit</button>
        <button onClick={onComplete}>Completed</button>
      </div>
    </div>
  );
}
