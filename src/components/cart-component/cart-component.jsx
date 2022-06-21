import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import './cart-component.css';
import { addToCart, removeFromCart } from "../../features/cartState";

const CartComponent = ({cartItem}) => {
    const dispatch = useDispatch();
    const {product, quantity} = cartItem;
    const {id, title, price, category, image} = product
    const [prodQuantity, setProdQuantity] = useState(quantity);
    const increment = () => {
        if(prodQuantity >= 5)
            return
        let newCartObj = {
            product:product,
            quantity: 1
        }; 
        dispatch(addToCart(newCartObj));
        setProdQuantity(prodQuantity+1)
    }
    const decrement = () => {
        let newCartObj = {
            product:product,
            quantity: 1
        }; 
        dispatch(removeFromCart(newCartObj));
        setProdQuantity(prodQuantity-1)
    }
    return(
        <div className="cart-detail" >
            <div className='cartimg-div'>
                <img className='cartproduct-img' src={image} alt={title} />
            </div>
            
            <div className='cartproduct-data'>
                <Link to={`/${id}`} className="cartbrand-name">
                    <p className='cartproduct-title'>{title}</p>
                </Link>
                <p className='cartproduct-category'>{category}</p>
                <p className='cartproduct-price'>₹{price}</p>
                <div className="rmv-btn-container">
                    <button onClick={decrement} className='change1-btn'>-</button>
                    <button className='change1-btn'>{prodQuantity}</button>
                    <button onClick={increment} className='change1-btn'>+</button>
                </div>
                <p>Total Price: {(price*quantity).toFixed(2)}</p>
                
            </div>
        </div>
    )
}

export default CartComponent;