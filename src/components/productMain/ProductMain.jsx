import React from 'react';

import './ProductMain.scss';

// from Product
const ProductMain = ({ gameId, handleProductRemove, amount, price }) => (
  <div className="product-main">
    <div className="product-buy-info">
      <span className="product-amount">amount: {amount}</span>
      <span className="product-price">${price}</span>
    </div>
    <span className="product-edit">Edit</span>
    <span onClick={handleProductRemove} product-data={gameId} className="product-delete">Delete</span>
  </div>
);


export default ProductMain;