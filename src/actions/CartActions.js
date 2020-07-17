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
const unsetCartProductById = (data) => {
  return {
    type: Actions.REMOVE_CART_BY_ID_PRODUCTS,
    data,
  };
};

const removeCartProductsById = (id) => {
  return async (dispatch, getState) => {
    const cartProducts = await getState().cartReducer.cart;
    // let removeIndex = cartProducts
    //   .map((product) => {
    //     return product.selectedId;
    //   })
    //   .indexOf(id);
    // cartProducts.splice(removeIndex, 1);
    
    let cart = cartProducts.filter((product) => {
      return product.selectedId !== id;
    });
    dispatch(unsetCartProductById(cart));
  };
};

const setCartProduct = (data) => {
  return async (dispatch, getState) => {
    const products = await getState().cartReducer.cart;
    if (products.length >= 0) {
      const cartProducts = products.concat(data);
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
  removeCartProductsById,
};
