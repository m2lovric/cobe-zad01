import React from 'react';
import './App.scss';
import Product from './components/Product'
import Cart from './components/Cart';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : [],
      cart : []
    }
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

  removeFromCart = (id) => {
    const array = [...this.state.cart];
    const filteredArr = array.filter(el => el.id !== id);
    console.log(filteredArr);
    this.setState({cart: filteredArr});
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
          <Cart cart={this.state.cart} handleRemove={this.removeFromCart}/>
        </aside>
      </>
    );
  }  
}

export default App;
