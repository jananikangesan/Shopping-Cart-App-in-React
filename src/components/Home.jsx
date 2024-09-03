import React, { useState } from 'react';
import data from "../assets/products.json";
import Product from './Product';
import '../css/Home.css'

const Home = () => {
    const [products,setProducts]=useState(data);

  return (

    <div className="product-container">
        {products.map((item)=>(
          <Product key={item.id} product={item}/>
        ))}
    </div>
  )
}

export default Home