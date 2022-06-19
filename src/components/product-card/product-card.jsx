import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './product-card.css';
import {addToCart} from '../../features/cartState';

const ProductCard = ({product}) =>{
    const [quantity, setQuantity] = useState(0)
    const [gotocart, setGoToCart] = useState(false)
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
    const dispatch = useDispatch();
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
            <form onSubmit={onSubmitHandler}>
                {gotocart ?
                <Link to="/cart" className="brand-name">
                    <button className='gotocart-btn' >GO TO CART</button>
                </Link> :
                <div className='addtobag-div'>
                    <label htmlFor="quantity" className='qty-label'>Quantity:</label>
                    <input type="number" id="quantity"  min="1" max="5" value={quantity} onChange={(e)=>setQuantity(e.target.value)} /> <br/>
                    <input type='submit' value={"ADD TO BAG"} className='bag-btnhome'/>
                </div>}
            </form>
        </div>
        
    )
}

export default ProductCard;