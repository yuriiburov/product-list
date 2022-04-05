import React from 'react';
import PropTypes from 'prop-types';
import Product from '../product/Product';

import './Products.scss';

const Products = ({ products }) => (
  <div>
    <main className="products">
      {products.map(product => (
        <Product product={product} key={product.id} />
      ))}
    </main>
  </div>
);

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()),
};

export default Products;
