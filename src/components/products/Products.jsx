import React from 'react';
import Product from "../product/Product";

import './Products.scss';

// from App
const Products = ({ handleProductRemove, customStore }) => (
  <div>
    <main className='products'>
      {
        customStore.map(game => <Product handleProductRemove={handleProductRemove} game={game} key={game.id}/>)
      }
    </main>
  </div>
);

export default Products;