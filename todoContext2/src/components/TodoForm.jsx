import { useContext, useState } from 'react'
import {nanoid} from "nanoid"
import { TodoContext } from '../context/TodoContext'

function TodoForm() {
    const {dispatch} = useContext(TodoContext)
    const [todo, setTodo] = useState("")
    const handleSubmit = (e) => {
      e.preventDefault();

      const newTodo = {id: nanoid(), todo, isComplete: false}
      dispatch({type: "ADD_TODO", payload: newTodo})
      console.log("Todo Added");


      setTodo("");

    }
  return (
    <div className='form-container'>
    <form className="flex" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add Your Todos..."
                className=""
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="">
                Add Todo
            </button>
        </form>
        </div>
  )
}

export default TodoForm