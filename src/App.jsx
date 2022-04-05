import React from 'react';
import { Provider } from 'react-redux';

import ProductList from './products/components/productList/ProductList';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
};

export default App;
