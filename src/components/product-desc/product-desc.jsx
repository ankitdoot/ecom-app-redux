import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './product-desc.css'
import {addToCart} from '../../features/cartState';

const Productdesc = ({product}) => {
    const {category, description, image, price, title, rating:{rate, count}} = product;
    const [quantity, setQuantity] = useState(0)
    const [gotocart, setGoToCart] = useState(false)
    const dispatch = useDispatch();
    const onSubmitHandler = (e) => {
        e.preventDefault()
        setGoToCart(true)
        let newCartObj = {
            product:product,
            quantity:quantity
        }; 
        dispatch(addToCart(newCartObj));
        setQuantity(0)
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
            <form onSubmit={onSubmitHandler}>
                {gotocart ?
                <Link to="/cart" className="brand-name">
                    <button className='gotocart-btn' >GO TO CART</button>
                </Link> :
                <div>
                    <label htmlFor="quantity" className='qty-label'>Quantity:</label>
                    <input type="number" id="quantity"  min="1" max="5" value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
                    <input type='submit' value={"ADD TO BAG"} className='bag-btn'/>
                </div>}
            </form>
        </div>
    </div>
  )
}

export default Productdesc;