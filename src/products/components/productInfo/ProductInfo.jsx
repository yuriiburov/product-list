import React from 'react';
import ProductComment from '../productComment/ProductComment';
import PropTypes from 'prop-types';

import './ProductInfo.scss';

const ProductInfo = ({ name, description, comments }) => (
  <div className="product-info">
    <h3 className="product-info__name">{name}</h3>
    <p className="product-info__description">{description}</p>

    <div className="product-info__comments">
      {comments.map(comment => (
        <ProductComment comment={comment} key={comment.id} />
      ))}
    </div>
  </div>
);

ProductInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
};

export default ProductInfo;
