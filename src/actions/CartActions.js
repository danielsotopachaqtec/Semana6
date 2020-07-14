import Actions from '../Resource/Actions';

const setCartSuccess = (data) => {
  return {
    type: Actions.SET_CART_PRODUCTS,
    data,
  };
};

const getCartSuccess = (data) => {
  return {
    type: Actions.GET_CART_PRODUCTS,
    data,
  };
};

const setCartProduct = (data) => {
  return async (dispatch, getState) => {
    const products = await getState().cartReducer.cart;
    console.warn('setCartProduct', products);
    console.warn('setCartProduct data', data);
    if (products.length >= 0) {
      const cartProducts = products.concat(data);
      console.warn('cartProducts', cartProducts);
      dispatch(setCartSuccess(cartProducts));
    }
  };
};

const getCartProducts = () => {
  return async (dispatch, getState) => {
    const products = await getState().cartReducer.cart;
    dispatch(getCartSuccess(products));
  };
};

export default {
  setCartProduct,
  getCartProducts,
};
