import React from "react";

export default function Todo({ todo }) {
  return (
    <div key={todo.id}>
      <div>{todo.text}</div>
      <button>Edit</button>
      <button>Completed</button>
    </div>
  );
}
