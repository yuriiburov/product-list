import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { productListSelector } from '../../products.selectors';
import * as productActions from '../../products.actions';

import './ProductMain.scss';

const ProductMain = ({ productId, amount, price, products, deleteProduct }) => {
  const handleProductRemove = e => {
    products.filter(({ id }) => {
      if (id === e.target.attributes['product-data'].value) {
        deleteProduct(id);
      }
      return id !== e.target.attributes['product-data'].value;
    });
  };

  return (
    <div className="product-main">
      <div className="product-buy-info">
        <span className="product-amount">amount: {amount}</span>
        <span className="product-price">${price}</span>
      </div>
      <span className="product-edit">Edit</span>
      <span
        onClick={handleProductRemove}
        product-data={productId}
        className="product-delete"
      >
        Delete
      </span>
    </div>
  );
};

ProductMain.propTypes = {
  productId: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape()),
  deleteProduct: PropTypes.func.isRequired,
};

const mapState = state => ({
  products: productListSelector(state),
});

const mapDispatch = {
  deleteProduct: productActions.deleteProduct,
};

export default connect(mapState, mapDispatch)(ProductMain);
