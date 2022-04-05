import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../header/Header';
import Products from '../products/Products';
import Modal from '../modal/Modal';

import * as productActions from '../../products.actions';
import { productListSelector } from '../../products.selectors';

import './ProductList.scss';

const ProductList = props => {
  const { products, getProductList, newProduct } = props;
  const [isShowModal, setIsShowModal] = useState(false);

  const closeOrShowModal = () => {
    setIsShowModal(!isShowModal);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className="product-list">
      <Header />
      <Products products={products} />
      <button onClick={closeOrShowModal} className="add-product">
        +
      </button>
      {isShowModal && (
        <Modal newProduct={newProduct} closeOrShowModal={closeOrShowModal} />
      )}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()),
  getProductList: PropTypes.func.isRequired,
  newProduct: PropTypes.func.isRequired,
};

const mapState = state => ({
  products: productListSelector(state),
});

const mapDispatch = {
  getProductList: productActions.getProductList,
  newProduct: productActions.newProduct,
};

export default connect(mapState, mapDispatch)(ProductList);
