import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import './cart-component.css';
import { removeFromCart } from "../../features/cartState";

const CartComponent = ({cartItem}) => {
    const dispatch = useDispatch();
    //const {product:{id, title, price, category, image}, quantity} = cartItem;
    const {product, quantity} = cartItem;
    const {id, title, price, category, image} = product
    const [removeQuantity, setRemQuantity] = useState(0)
    /*function delFromCart(){
        dispatch(removeFromCart(cartItem));
    }*/
    function onSubmitHandler(e){
        e.preventDefault()
        let newCartObj = {
            product: product,
            quantity:removeQuantity
        }; 
        dispatch(removeFromCart(newCartObj));
        setRemQuantity(0)
    }
    //<button onClick={delFromCart}>Remove from Cart</button>
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
                <p>Total Price: {price*quantity}</p>
                <form onSubmit={onSubmitHandler}>
                    <input type="number" id="quantity"  min="0" max={quantity} value={removeQuantity} onChange={(e)=>setRemQuantity(e.target.value) }  className='rem-input'/>
                    <input type='submit' value={"Remove from Cart"} className='rem-btn'/>
                </form>
            </div>
        </div>
    )
}

export default CartComponent;