const Navigation = () => {
    return (
        <nav className='nav'>
        <div className='logo'>
          <img src="/images/nike_logo.png" alt="logo" height={"80px"}/>
        </div>
        <ul>
          <li><a href='#'>Menu</a></li>
          <li><a href='#'>Location</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
        <button className='button login'>
          Login
        </button>
      </nav>  
    )
}
export default Navigation;