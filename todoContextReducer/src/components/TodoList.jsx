import { useContext } from "react"
import { BiCheck, BiEdit, BiTrashAlt } from "react-icons/bi"
import { TodoContext } from "../Contexts/TodoProvider"

function TodoList({id, isChecked, text}) {
    const {dispatch} = useContext(TodoContext)
    const checkTodo = () => {
        dispatch({type:"CHECK_TODO", payload: id})
    }
    
    const deleteTodo = () => {
        dispatch({type: "DELETE_TODO", payload: id})
    }

    const editFx = () => {
      dispatch({type: "EDIT_CONFIG", payload: {text, id}})
    }

  return (
    <li>
        <button className="btn btn-circle"
        onClick={checkTodo}><BiCheck /></button>
        <p className="text">{text}</p>
        <button className={`editBtn btn btn-circle ${isChecked && "v-hide"}`}
        onClick={editFx}><BiEdit /></button>
        <button className="trashBtn btn btn-circle"
        onClick={deleteTodo}><BiTrashAlt /></button>
    </li>
  )
}

export default TodoList