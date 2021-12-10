let initialState = {
  products: [
    {
      name: 'Monopoly',
      img: 'https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      description: 'This game sucks.',
      price: 29.99,
      count: 18,
      category: 'Games'
    },
    {
      name: 'Cracking the Coding Interview',
      img: 'https://images.unsplash.com/photo-1605185702350-e5e02808da0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2312&q=80',
      description: 'Get a job.',
      price: 19.99,
      count: 37,
      category: 'Books'
    },
    {
      name: 'Nintendo Switch',
      img: 'https://images.unsplash.com/photo-1585857188823-77658a70979a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80',
      description: 'Forget about productivity.',
      price: 399.99,
      count: 5,
      category: 'Electronics'
    },
    {
      name: 'Socks',
      img: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
      description: 'Warm your feetses!',
      price: 12.99,
      count: 72,
      category: 'Clothing'
    },
    {
      name: 'Bananas',
      img: 'https://images.unsplash.com/photo-1603052875302-d376b7c0638a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
      description: 'A very good fruit.',
      price: 0.49,
      count: 420,
      category: 'Groceries'
    },
    {
      name: 'Magnets',
      img: 'https://images.unsplash.com/photo-1597423498219-04418210827d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
      description: 'How do they work?',
      price: 3.99,
      count: 119,
      category: 'Household'
    },

  ],
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
  case 'SELECT_CATEGORY':
    if (action.payload !== 'All') {
      console.log(action.payload);
      let filteredProducts = initialState.products.filter(product => product.category === action.payload);
      return { products: filteredProducts };
    }
    return initialState;
  default:
    return state;
  }
}

export default productsReducer;
