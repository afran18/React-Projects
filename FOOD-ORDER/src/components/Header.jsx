import React, { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/userProgressContext';


function Header() {
  const cartCtx =  useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);


  const totalCartItems = cartCtx.items.reduce( (totalNumberofItems, item) => {
    return totalNumberofItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return ( <header id='main-header'>
    <div id='title'>
        <img src={logoImg} alt="A restaurant" />
        <h1>React Food</h1>
    </div>
    <nav>
        <Button textOnly={true} onClick={handleShowCart}>Cart ({totalCartItems})</Button> 
    </nav>
    </header>
  )
}

export default Header