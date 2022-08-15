import React from "react";

export default function Todo({ todo, onComplete }) {
  return (
    <div className="todo" key={todo.id}>
      <div>{todo.text}</div>
      <div>
        <button>Edit</button>
        <button onClick={onComplete}>Completed</button>
      </div>
    </div>
  );
}
