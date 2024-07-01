/* eslint-disable react/prop-types */
import { useContext } from "react"
import { TodoContext } from '../context/TodoContext'


function TodoItem({id, todo, isComplete}) {
    const {dispatch} = useContext(TodoContext)

    const toggleComplete = () => {
        dispatch({type: "TOGGLE_COMPLETE", payload: id})
    }

    const deleteTodo = () => {
        dispatch( { type: "DELETE_TODO", payload: id} )
    }

  return (
    <li>
         <input
                type="checkbox"
                className="cursor-pointer"
                checked={isComplete}
                onChange={toggleComplete}
            />
            <input
                type="text"
                className={""}
                value={todo}
                readOnly
            />
            {/* Edit, Save Button */}
            {/* <button
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button> */}
            {/* Delete Todo Button */}
            {/* <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>  */}
            <button>Edit</button>
            <button onClick={deleteTodo}>Delete</button>
    </li>
  )
}

export default TodoItem