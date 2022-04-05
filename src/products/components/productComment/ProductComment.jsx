import React from 'react';
import PropTypes from 'prop-types';

import './ProductComment.scss';

const ProductComment = ({ comment }) => (
  <>
    <p className="product-info__comments-item">{comment.description}</p>
    <span className="product-info__comments-date">{comment.date}</span>
  </>
);

ProductComment.propType = {
  comment: PropTypes.object,
};

export default ProductComment;
