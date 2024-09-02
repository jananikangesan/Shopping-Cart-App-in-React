import React from 'react';
import "../css/Product.css";


const Product = ({product}) => {
  const name=product.name.length>21 ?product.name.substring(0,20)+"..  ":product.name;
  return (
    <div className='product'>
       <div className="img">
        <img src={`${product.pic}`} alt={product.name}/>
       </div>

       <div className="details">
        <h4>{name}</h4>
        <p>Price Rs:{product.amt}</p>
        <button>Add to Cart</button>
       </div>
    </div>
  )
}

export default Product