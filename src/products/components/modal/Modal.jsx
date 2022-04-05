import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

const Modal = ({ newProduct, closeOrShowModal }) => {
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productComment, setProductComment] = useState('');
  const [productPrice, setProductPrice] = useState('');

  // i know, Math.random for key this is bad
  const handleProductSubmit = e => {
    e.preventDefault();
    newProduct({
      name: productName,
      imageUrl: productImage,
      description: productDescription,
      comments: [
        {
          id: Math.random().toString(),
          description: productComment,
          date: new Date().toString(),
        },
      ],
      amount: 1,
      price: Number(productPrice),
    });
    closeOrShowModal();
  };

  return (
    <div className="overlay">
      <form className="modal-form" onSubmit={handleProductSubmit}>
        <label className="modal-form__label" htmlFor="name">
          Name
        </label>
        <input
          onChange={e => setProductName(e.target.value)}
          value={productName}
          id="name"
          name="name"
          type="text"
          placeholder="name"
          className="modal-form__name"
          required
        />

        <label className="modal-form__label" htmlFor="image">
          Image url
        </label>
        <input
          onChange={e => setProductImage(e.target.value)}
          value={productImage}
          id="image"
          name="image"
          type="url"
          placeholder="url"
          className="modal-form__image"
          required
        />

        <textarea
          onChange={e => setProductDescription(e.target.value)}
          value={productDescription}
          name="description"
          type="text"
          placeholder="description"
          className="modal-form__description"
          required
        />

        <textarea
          onChange={e => setProductComment(e.target.value)}
          value={productComment}
          name="comment"
          type="text"
          placeholder="Comment"
          className="modal-form__comment"
        />

        <label className="modal-form__label" htmlFor="price">
          Price
        </label>
        <input
          onChange={e => setProductPrice(e.target.value)}
          value={productPrice}
          id="price"
          name="price"
          type="number"
          placeholder="756"
          className="modal-form__image"
          required
        />

        <div className="modal-form__buttons">
          <button
            onClick={closeOrShowModal}
            type="button"
            className="modal-form__cancel"
          >
            Cancel
          </button>
          <button type="submit" className="modal-form__submit">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

Modal.propTypes = {
  newProduct: PropTypes.func.isRequired,
  closeOrShowModal: PropTypes.func.isRequired,
};

export default Modal;
