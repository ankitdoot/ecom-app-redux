import React from 'react';

import ProductCard from './product-card/product-card';

const Home = ({products}) => {

  return (
    <div>
      <div className="product-container"> 
      {products.map(product =>{
        return <ProductCard key={product.id} product={product}/>
      })}
      </div>
    </div>
  )
}

export default Home;