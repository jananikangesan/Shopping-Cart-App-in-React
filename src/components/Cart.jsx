import React from 'react';
import "../css/Cart.css";

const Cart = () => {
  return (
    <>
        <h1 className='cart-heading'>Cart Products</h1>
        <div className="cart-container">
            <div className="cart-product">
                <div className="img">
                    <img src="" alt="image"/>
                </div>
            </div>
            <div className="cart-product-details">
                <h3>Product Name</h3>
                <p>Price Rs: 45</p>
            </div>
        </div>
        <h2 className='cart-amt'>Total Amount Rs: 135</h2>
    </>
  )
}

export default Cart