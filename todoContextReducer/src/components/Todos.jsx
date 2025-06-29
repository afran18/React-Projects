import { useContext } from "react"
import { TodoContext } from "../Contexts/TodoProvider"
import TodoList from "./TodoList"
import AlertMsg from "./AlertMsg"

function Todos() {

    const {todos} = useContext(TodoContext)
  return (
    <ul className="todos">
        {todos.length > 0 ? (
            todos.map( todo => (
                <TodoList key = {todo.id} {...todo} />
            ))
        ) : (
            <AlertMsg />
        )}

    </ul>
  )
}

export default Todos