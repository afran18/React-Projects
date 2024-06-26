import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../util/formatting';
import Input from './UI/Input';
import Button from './UI/Button';
import UserProgressContext from '../store/userProgressContext';

function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) =>  totalPrice + item.quantity * item.price,
        0
    );

    function handleClose() {
      userProgressCtx.hideCheckout();
    }

    const handleSubmit = (event) => {
      event.preventDefault();

      const fd = new FormData(event.target);
      const customerData = Object.fromEntries(fd.entries());

      fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order: {
            items: cartCtx.items,
            customer: customerData
          }
        })
      });
    }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <form onSubmit={handleSubmit}>
          <Input label="Full Name" type="text" id="name" />
          <Input label="Email Id" type="email" id="email" />
          <Input label="Street" type="text" id="street" />

          <div className="control-row">
          <Input label="Zip Code" type="text" id="zip-code" />
          <Input label="City" type="text" id="city" />
          </div>

          <p className="modal-actions">
            <Button type="button" textOnly onClick={handleClose} > Close</Button>
            <Button>Submit Order</Button>
          </p>
        </form>
    </Modal>
  )
}

export default Checkout