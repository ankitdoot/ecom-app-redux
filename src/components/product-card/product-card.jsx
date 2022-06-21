import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './product-card.css';
import {addToCart, removeFromCart} from '../../features/cartState';

const ProductCard = ({product}) =>{
    const dispatch = useDispatch();
    const [quantty, setQuantity] = useState(0)
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
    return(
        <div className="product-detail" >
            <div className='img-div'>
                <img className='product-img' src={product.image} alt={product.title} />
            </div>
            
            <div className='product-data'>
                <Link to={`/${product.id}`} className="brand-name">
                    <p className='product-title'>{product.title}</p>
                </Link>
                <p className='product-category'>{product.category}</p>
                <p className='product-price'>₹{product.price}</p>    
            </div>
            {quantty === 0 ?
            <button type='submit' onClick={onSubmitHandler} className='addtocart-btn'>ADD TO Cart</button> :
            <div>
                <button onClick={decrement} className='change1-btn'>-</button>
                <button className='change1-btn'>{quantty}</button>
                <button onClick={increment} className='change1-btn'>+</button>
            </div>}
        </div>
        
    )
}

export default ProductCard;