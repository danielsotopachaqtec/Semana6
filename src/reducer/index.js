import {combineReducers} from 'redux';
import {reducer as network} from 'react-native-offline';
import productReducer from './Products';
import ordersReducer from './Orders';

export default function getRootReducer() {
  return combineReducers({
    productReducer,
    ordersReducer,
    network,
  });
}
