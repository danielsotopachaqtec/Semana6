import Actions from '../../Resource/Actions';

const initialState = {
  products: [],
  errors: '',
  lastestProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCHING_PRODUCTS_SUCCESS:
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
    case Actions.SET_LASTEST_PRODUCTS:
      return {
        ...state,
        lastestProducts: action.data,
        errors: '',
      };
    case Actions.UNSET_LASTEST_PRODUCTS:
      return {
        ...state,
        lastestProducts: [],
        errors: '',
      };
    case Actions.GET_LASTEST_PRODUCTS:
      return {
        ...state,
        lastestProducts: action.data,
      };
    default:
      return state;
  }
};

export default productReducer;
