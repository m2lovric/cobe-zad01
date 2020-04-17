import React from 'react';

const CartProduct = ({cart, handleRemove}) => {
  return(
    <>
      {
        cart.map(el => {
          return(
            <article key={el.id}>
              <img src={el.product.image} alt="product"/>
              <div>
                <p>{el.count}x {el.product.name}</p>
                <p>Total: {(el.count * el.product.price.amount).toFixed(2)} {el.product.price.currency}</p>
              </div>
              <button className="btn" onClick={() => handleRemove(el.id)}> X </button>
            </article>
          )
        })
      }
    </>
  )
}

export default CartProduct;