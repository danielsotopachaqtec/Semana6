import {combineReducers} from 'redux';
import {reducer as network} from 'react-native-offline';
import productReducer from './Products';

export default function getRootReducer() {
  return combineReducers({
    productReducer,
    network,
  });
}
