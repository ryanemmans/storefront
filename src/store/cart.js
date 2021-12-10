let initialState = {
  products: []
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
  case 'ADD_TO_CART':
  {
    let cartItem = action.payload;
    if (state.products.includes(cartItem)) {
      ++cartItem.qty;
      return state;
    } else {
      cartItem.qty = 1;
    }
    return { ...state, products: [...state.products, cartItem] };
  }
  case 'REMOVE_FROM_CART':
    return {...state, products: state.products.filter(product => {
      if (product === action.payload && product.amount > 0) {
        --product.qty;
        return product.qty > 0;
      }
      return product !== action.payload;
    })
    };
  default:
    return state;
  }
}

export const addToCart = product => {
  return {
    type: 'ADD_TOCART',
    payload: product,
  };
};

export const removeFromCart = product => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product,
  };
};

export default cartReducer;
