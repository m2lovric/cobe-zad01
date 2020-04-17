import React from 'react';

const Button = ({product, handleCart}) => {
  const add = () => {
    handleCart(product.id, product)
  }
  return(
    <button onClick={add}>Add to Cart</button>
  )
}

export default Button;