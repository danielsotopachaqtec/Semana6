import Actions from '../Resource/Actions';
import Api from '../Api/ProductApi';

const getProductsSuccess = (data) => {
  return {
    type: Actions.FETCHING_PRODUCTS_SUCCESS,
    data,
  };
};

const getProductsFailure = (errors) => {
  return {
    type: Actions.FETCHING_PRODUCTS_FAILURE,
    errors,
  };
};

const setLastestProducts = (data) => {
  return {
    type: Actions.SET_LASTEST_PRODUCTS,
    data,
  };
};

const unsetLastestProducts = () => {
  return {
    type: Actions.UNSET_LASTEST_PRODUCTS,
  };
};

const getLastestProducts = (data) => {
  return {
    type: Actions.GET_LASTEST_PRODUCTS,
    data,
  };
};

const getAllLastestProducts = () => {
  return async (dispatch, getState) => {
    const products = await getState().productReducer.lastestProducts;
    dispatch(getLastestProducts(products));
  };
};

const addLastestProducts = (data) => {
  return async (dispatch, getState) => {
    const products = await getState().productReducer.lastestProducts;
    const exist = products.filter((product) => product._id === data._id);
    if (exist.length === 0) {
      const lastestProducts = products.concat(data);
      dispatch(setLastestProducts(lastestProducts));
    }
  };
};

const removeLastestProducts = (data) => {
  return async (dispatch, getState) => {
    dispatch(unsetLastestProducts());
  };
};

const getProducts = () => {
  return async (dispatch, getState) => {
    // const products = getState().productReducer;
    const result = await Api.getAllProduct();
    if (result.errors) {
      dispatch(getProductsFailure(result.errors));
    } else {
      dispatch(getProductsSuccess(result));
    }
  };
};

export default {
  getProducts,
  addLastestProducts,
  removeLastestProducts,
  getAllLastestProducts,
};
