import React from 'react';

import './ProductComment.scss';

// from ProductInfo
const ProductComment = ({ comment }) => (
  <>
    <p className="product-info__comments-item">{comment.description}</p>
    <span className="product-info__comments-date">{comment.date}</span>
  </>
);

export default ProductComment;