import { PRODUCT_LIST_RECEIVED } from './products.actions';

const initialState = {
  productList: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_RECEIVED:
      return {
        ...state,
        productList: action.payload.productList,
      };
    default:
      return state;
  }
};

export default productReducer;
