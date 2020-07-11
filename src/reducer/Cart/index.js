import Actions from '../../Resource/Actions';

const initialState = {
  cart: [],
  success: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_CART_PRODUCTS:
      return {
        ...state,
        cart: action.data,
        success: true,
      };
    case Actions.GET_CART_PRODUCTS:
      return {
        ...state,
        cart: action.data,
        success: true,
      };
    default:
      return state;
  }
};

export default cartReducer;
