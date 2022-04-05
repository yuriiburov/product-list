import React from 'react';
import PropTypes from 'prop-types';
import ProductInfo from '../productInfo/ProductInfo';
import ProductMain from '../productMain/ProductMain';

import './Product.scss';

const Product = ({ product }) => {
  const { imageUrl, name, description, comments, id, amount, price } = product;
  return (
    <div className="product">
      <img src={imageUrl} alt="game" className="product__img" />
      <ProductInfo name={name} description={description} comments={comments} />
      <ProductMain productId={id} amount={amount} price={price} />
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
