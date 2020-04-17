import React from 'react';
import Button from './Button';

const Product = ({product, handleCart}) => {
  return(
    <article className="Product">
      <img src={product.image} alt="product"/>
      <p>{product.name}</p>
      <p><span>{product.price.amount}</span> {product.price.currency}/{product.price.measureUnit}</p>
      <Button product={product} handleCart={handleCart}/>
    </article>
  )
}

export default Product;