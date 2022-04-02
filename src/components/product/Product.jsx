import React from 'react';
import ProductInfo from "../productInfo/ProductInfo";
import ProductMain from "../productMain/ProductMain";

import './Product.scss';

// from Products
const Product = ({ handleProductRemove, game }) => (
  <div className="product">
    <img
      src={game.imageUrl}
      alt="game" className="product__img"
    />
    <ProductInfo name={game.name} description={game.description} comments={game.comments}/>
    <ProductMain gameId={game.id} handleProductRemove={handleProductRemove} amount={game.amount} price={game.price}/>
  </div>
);

export default Product;