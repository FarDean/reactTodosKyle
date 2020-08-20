import React from 'react'

export default function Todo({todo, toggleTodo}) {
    function handleTodo(){
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label htmlFor="">
                <input onChange={handleTodo} type="checkbox" checked={todo.completed}/>
                {todo.name}
            </label>
        </div>
    )
}
