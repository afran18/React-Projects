import {useContext} from 'react'
import {TodoContext} from '../Contexts/TodoProvider'

function Section() {
  const {dispatch} = useContext(TodoContext);

  const clearAll = () => {
    dispatch({type: "DELETE_ALL"})
  }

  return (

    <section>
      <p className="counter">3 Items left</p>
      <div className="filterBox">
        <button className="btn active">All</button>
        <button className="btn">Undone</button>
        <button className="btn">Complete</button>
      </div>
      <button className="btn"
      onClick={clearAll}>Clear All Items</button>
    </section>
  )
}

export default Section