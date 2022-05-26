import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import './App.css';
import Home from './components/home';
import Productdesc from "./components/product-desc/product-desc";
import Cart from "./components/cart/cart";
import Data from './data'

const App = () =>{
  const [products, setProducts] = useState([]);
  const [cartItems,setCartItems]=useState([])
  const addToCart=(newCartItem)=>{
    //console.log(newCartItem)
    //console.log(cartItems)
      setCartItems([...cartItems, newCartItem])
  }
    //console.log('render', products);
    useEffect(() => {
        /*fetch('https://fakestoreapi.com/products?limit=20')
        .then(response => response.json())
        .then(json => setProducts(json))*/
        setProducts(Data);
    }, [])
  return(
    <Router>
      <nav className="navbar-container">
        <Link to="/" className="brand-name"><h1>DRX Clothing</h1></Link>
        <h2 className="brand-tagline">Clothing for New Generation</h2>
        <Link to="cart" className="cart-link"><h1>Cart</h1></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home products={products}/>} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="*" element={<h3>Bad Request</h3>}/>
        <Route path="ordersuccess"></Route>
        {products.map(product =>{
        return <Route path={`/${product.id}`} key={product.id} element={<Productdesc product={product} addToCart={addToCart} />} />
      })}
      </Routes>
    </Router>
  )
}

export default App;