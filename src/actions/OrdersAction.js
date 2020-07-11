import Actions from '../Resource/Actions';
import Api from '../Api/OrderApi';

const getOrdersSuccess = (data) => {
  return {
    type: Actions.FETCHING_ORDERS_SUCCESS,
    data,
  };
};

const getOrdersFailure = (errors) => {
  return {
    type: Actions.FETCHING_ORDERS_FAILURE,
    errors,
  };
};

const getOrders = () => {
  return async (dispatch, getState) => {
    const result = await Api.getOrders();
    if (result.errors) {
      dispatch(getOrdersFailure(result.errors));
    } else {
      dispatch(getOrdersSuccess(result));
    }
  };
};

export default {
  getOrders,
};
