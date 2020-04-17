import React from 'react';
import './App.scss';

const Product = ({product, handleCart}) => {
  const data = product;
  return(
    <article className="Product">
      <img src={product.image} alt="product"/>
      <p>{product.name}</p>
      <p><span>{product.price.amount}</span> {product.price.currency}/{product.price.measureUnit}</p>
      <Button product={data} handleCart={handleCart}/>
    </article>
  )
}

const Cart = ({cart}) => {
  const data = cart;
  return(
    <section className="Cart">
      <h1>Cart</h1>
      {
        data.map(el => {
          return(
            <article key={el.id}>
              <img src={el.product.image} alt="product"/>
              <div>
                <p>{el.count}X {el.product.name}</p>
                <p>Total: {(el.count * el.product.price.amount).toFixed(2)} {el.product.price.currency}</p>
              </div>
              <button> X </button>
            </article>
          )
        })
      }
      <h2>Total: {
        data.reduce((sum, el) => {
          const total = parseFloat((el.count * el.product.price.amount).toFixed(2));
          console.log(total);
          return sum + total
        }, 0).toFixed(2)
      } Kn</h2>
    </section>
  )
}

const Button = ({product, handleCart}) => {
  const add = () => {
    handleCart(product.id, product)
  }
  return(
    <button onClick={add}>Add to Cart</button>
  )
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : [],
      cart : []
    }

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart = (id, product) => {
    const array = [...this.state.cart];
    if(array.find(x => x.id === id)){
      const obj = array.find(x => x.id === id);
      this.setState(() => {
        return obj.count++;
      })
    }else{
      array.push({id: id,product : product, count: 1});
      this.setState({cart: array});
    }
  }

  componentDidMount(){
    fetch('https://raw.githubusercontent.com/cobeisfresh/frontend-tasks/shopping-cart/products.json')
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({data : data['products']});
    })
    .catch()
  }

  render(){
    const products = this.state.data;
    return (
      <>
        <main>        
          {
            products.map( el => {
              return <Product key={el.id} product={el} handleCart={this.addToCart} />
            })
          }
        </main>
        <aside>
          <Cart cart={this.state.cart}/>
        </aside>
      </>
    );
  }  
}

export default App;
