import { BiSun } from 'react-icons/bi'

function Header() {
  return (
    <header>
        <h1>Todo App</h1>
        <button className='btn btn-round'>
            <BiSun />
        </button>
    </header>
  )
}

export default Header