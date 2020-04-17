import React from 'react';
import CartProduct from './CartProduct';

const Cart = ({cart, handleRemove}) => {
  return(
    <section className="Cart">
      <h1>Cart</h1>
      <CartProduct cart={cart} handleRemove={handleRemove} />
      <h2>Total: {
        cart.reduce((sum, el) => {
          const total = parseFloat((el.count * el.product.price.amount).toFixed(2));
          console.log(total);
          return sum + total
        }, 0).toFixed(2)
      } Kn</h2>
    </section>
  )
}

export default Cart