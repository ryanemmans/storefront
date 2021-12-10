import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/cart';

function Cart(props) {
  if (props.products.length > 0) {
    return (
      <>
        {props.products.map((product, idx) => {
          return (
            <div>
              <p>
                [{props.qty[idx]}]
              </p>
              <p>
                {product.name}
              </p>
              <button onClick={() => props.removeFromCart(product)} />
            </div>
          );
        })}
      </>
    );
  } else {
    return null;
  }
}

const mapStateToProps = state => {
  return {
    products: state.cart.products,
    qty: state.cart.products.map(product => {
      return product.qty;
    })
  };
};

const mapDispatchToProps = dispatch => ({
  removeFromCart: (product) => dispatch(removeFromCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
