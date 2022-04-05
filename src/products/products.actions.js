import * as productsGateway from './productsGateway';

export const PRODUCT_LIST_RECEIVED = 'PRODUCT_LIST_RECEIVED';

export const productListReceived = productList => ({
  type: PRODUCT_LIST_RECEIVED,
  payload: { productList },
});

export const getProductList = () => {
  const thunkAction = dispatch => {
    productsGateway
      .fetchProductList()
      .then(productList => dispatch(productListReceived(productList)));
  };

  return thunkAction;
};

export const deleteProduct = productId => {
  const thunkAction = dispatch => {
    productsGateway
      .deleteProduct(productId)
      .then(() => dispatch(getProductList()));
  };

  return thunkAction;
};

export const newProduct = productData => {
  const thunkAction = dispatch => {
    productsGateway
      .addProduct(productData)
      .then(() => dispatch(getProductList()));
  };

  return thunkAction;
};
