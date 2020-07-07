import {createStore, applyMiddleware, compose} from 'redux';
import {createNetworkMiddleware} from 'react-native-offline';
import thunk from 'redux-thunk';
// import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import getRootReducer from '../reducer';

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});

// const navMiddleware = createReactNavigationReduxMiddleware(
//   (state) => state.navReducer,
// );

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function config() {
  return createStore(
    getRootReducer(),
    undefined,
    composeEnhancer(applyMiddleware(networkMiddleware, thunk)),
  );
}
