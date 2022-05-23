import './product-card.css';
import { Link } from 'react-router-dom';
const ProductCard = ({product}) =>{
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
            
        </div>
        
    )
}

export default ProductCard;