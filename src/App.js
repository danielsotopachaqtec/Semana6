import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
import {ReduxNetworkProvider} from 'react-native-offline';
// import {
//   createReduxContainer,
//   createNavigationReducer,
// } from 'react-navigation-redux-helpers';
import getStore from './store';
import {DrawerStackNavigator} from './Router/drawer';

// const navReducer = createNavigationReducer(DrawerStackNavigator);

// const mapStateToProps = (state) => ({
//   state: state.navReducer,
// });

// const mapDispatchToProps = (dispatch) => ({
//   dispatch,
// });

// const AppWithNavigationState = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(DrawerStackNavigator);

const store = getStore();

// console.disableYellowBox = true;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <ReduxNetworkProvider>
          <DrawerStackNavigator />
        </ReduxNetworkProvider>
      </Provider>
    );
  }
}
