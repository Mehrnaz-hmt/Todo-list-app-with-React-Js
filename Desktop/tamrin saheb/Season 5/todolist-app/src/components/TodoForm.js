import React, { useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(!input) {
      alert("Please add todo!");
      return;
    } 
      props.addTodoHandler(input)
      setInput("")    
    // add entered input to inputs
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" input={input} onChange={changeHandler} />
      <button type="submit">Add</button>
    </form>
  );
}
