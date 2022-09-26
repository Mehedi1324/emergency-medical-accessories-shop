export const addToCart = (product, quantity) => (dispatch, getState) => {
  var cartItems = {
    name: product.name,
    image: product.image,
    price: product.price,
    rate: product.rate,
    quantity: Number(quantity),
  };

  if (cartItems.quantity > 0) {
    if (cartItems.quantity > 15) {
      alert(
        'If you want to buy more then 15 of same product, please contact us !'
      );
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: cartItems });
      localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cartReducer.cartItems)
      );
    }
  }
};

export const deleteFromCart = (product) => (dispatch, getState) => {
  dispatch({ type: 'DELETE_FROM_CART', payload: product });
  localStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const removeAllItems = () => (dispatch, getState) => {
  dispatch({ type: 'DELETE_ALL' });
  localStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cartReducer.cartItems)
  );
};
