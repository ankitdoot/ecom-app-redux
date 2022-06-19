import React, { Suspense} from 'react';

import ProductCard from './product-card/product-card';

const Home = ({products}) => {

  return (
    <div>
      <div className="product-container">
      <Suspense fallback={<div>Products are loading..please wait</div>}> 
      {products.map(product =>{
        return <ProductCard key={product.id} product={product}/>
      })}
      </Suspense>
      </div>
    </div>
  )
}

export default Home;