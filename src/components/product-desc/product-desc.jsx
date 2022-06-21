import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './product-desc.css'
import {addToCart, removeFromCart} from '../../features/cartState';

const Productdesc = ({product}) => {
    const {category, description, image, price, title, rating:{rate, count}} = product;
    const [quantty, setQuantity] = useState(0)
    const dispatch = useDispatch();
    const onSubmitHandler = (e) =>{
        e.preventDefault()
        let newCartObj = {
            product:product,
            quantity: 1
        }; 
        dispatch(addToCart(newCartObj));
        setQuantity(1)
    }
    const increment = () => {
        if(quantty === 5)
            return
        let newCartObj = {
            product:product,
            quantity: 1
        }; 
        dispatch(addToCart(newCartObj));
        setQuantity(quantty+1)
    }
    const decrement = () => {
        let newCartObj = {
            product:product,
            quantity: 1
        }; 
        dispatch(removeFromCart(newCartObj));
        setQuantity(quantty-1)
    }
  return (
    <div className='productdesc-container'>
        <img src={image} className="productdesc-img" alt={`${title}`}/>
        <div className='productdesc-data'>
            <p className='productdesc-title'>{title}</p>
            <p className='productdesc-category'>{category}</p>
            <p className='productdesc-desc'>{description}</p>
            <p className='productdesc-price'>₹{price}</p>
            <p className='productdesc-rating'>{rate}✰ | {count} Ratings</p>
            {quantty === 0 ?
            <button type='submit' onClick={onSubmitHandler} className='bag-btn'>ADD TO Cart</button> :
            <div>
                <button onClick={decrement} className='change-btn'>-</button>
                <button className='change-btn'>{quantty}</button>
                <button onClick={increment} className='change-btn'>+</button>
            </div>}
        </div>
    </div>
  )
}

export default Productdesc;