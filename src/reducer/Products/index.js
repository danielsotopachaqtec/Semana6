import Actions from '../../Resource/Actions';

const initialState = {
  products: [],
  errors: '',
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCHING_PRODUCTS_SUCESSS:
      return {
        ...state,
        products: action.data,
        errors: '',
      };
    case Actions.FETCHING_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default productReducer;
