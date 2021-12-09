import { createStore, combineReducers } from 'redux';

import categoryReducer from './categories.js';
import productReducer from './products.js';

let reducers = combineReducers({
  categories: categoryReducer,
  products: productReducer
});

const store = () => {
  return createStore(reducers);
};

export default store;
