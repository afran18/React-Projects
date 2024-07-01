import { useContext, useEffect } from "react"
import TodoItem from "./TodoItem"
import { TodoContext } from "../context/TodoContext"



function Todos() {

  const {todos} = useContext(TodoContext)
  useEffect(() => {
    console.log(todos);
  }, [todos])
  
  return (
    <ul>
        {todos.length > 0 ? (
          todos.map(todo => (
            <TodoItem key = {todo.id} {...todo} />
          ))
        ) : (
          <p>No todos right now</p>
        )}
    </ul>
    
  )
}

export default Todos