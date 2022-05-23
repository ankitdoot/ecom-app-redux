import React from "react";
import { Link } from "react-router-dom";

import './cart-component.css';

const CartComponent = ({cartItem}) => {
    //console.log(cartItem);
    const {product:{id, title, price, category, image}, quantity} = cartItem
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
                <p className='cartproduct-quantity'>Qty: {quantity}</p>    
            </div>
        </div>
    )
}

export default CartComponent;