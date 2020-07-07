import Actions from '../Resource/Actions';
import Api from '../Api/ProductApi';

const getProductsSuccess = (data) => {
  return {
    type: Actions.FETCHING_PRODUCTS_SUCESSS,
    data,
  };
};

const getProductsFailure = (errors) => {
  return {
    type: Actions.FETCHING_PRODUCTS_FAILURE,
    errors,
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
};
