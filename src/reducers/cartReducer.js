export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const exists = state.cartItems.find(
        (item) => item.name === action.payload.name
      );
      if (exists) {
        console.log('the data is already there');
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.name === action.payload.name ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case 'DELETE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.name !== action.payload.name
        ),
      };
    case 'DELETE_ALL':
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
