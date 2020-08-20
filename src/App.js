import React, {useState, useRef,useEffect} from 'react';
import './App.css';
import TodoList from './componenets/TodoList'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos]= useState([]);
  const todoNameRef = useRef()
  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name==="")return
    setTodos(prev=>[...prev,{id:uuidv4(),name:name,completed:false}])
    todoNameRef.current.value = null
  }
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem('hmmm'));
    if(storedTodos){
      setTodos(storedTodos)
    }
  },[])
  useEffect(()=>{
      localStorage.setItem('hmmm',JSON.stringify(todos))
  },[todos]);
  function toggleTodo(id){
    const newTodos = [...todos];
    const todo = newTodos.find(todo=> todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }
  function handleClear(id){
    const newTodos = todos.filter(todo=> !todo.completed);
    setTodos(newTodos)
  }
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={handleClear}>Clear</button>
      <div>{todos.filter(todo=> !todo.completed).length} left</div>
    </>
  );
}

export default App;
