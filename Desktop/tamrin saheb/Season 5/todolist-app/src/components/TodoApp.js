import React,{useState} from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function TodoApp() {
    const [todos,setTodos] = useState([])


    const addTodoHandler = (input) => {
      // setTodos(input)
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        text:input,
        isCompleted: false
      }
      setTodos([...todos,newTodo])
    }
  return (
    <div className='container'>
    <TodoForm addTodoHandler={addTodoHandler}/>
    <TodoList/>
    </div>
  )
}
