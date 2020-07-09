import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Locations from '../Scenes/Locations';
import Home from '../Scenes/Home';
import Intro from '../Scenes/Intro';
import Products from '../Scenes/Products';
import ProductsDetails from '../Scenes/ProductsDetails';
import Dashboard from '../Scenes/Dashboard';
import OrderDetail from '../Scenes/OrderDetail';
import ShoppingCart from '../Scenes/ShoppingCart';
import PaymentMethods from '../Scenes/PaymentMethods';
import Checkout from '../Scenes/Checkout';
import SuccessPayment from '../Scenes/SuccessPayment';
import {MenuHeader} from '../Components/Menu/MenuHeader';
const Stack = createStackNavigator();

const MainStackNavigator = (props) => {
  const forFade = ({current, closing}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Stack.Navigator
      initialRouteName="Index"
      headerMode="screen"
      screenOptions={{
        headerStyle: {
          height: Platform.OS === 'ios' ? 80 : 65,
        },
        cardStyleInterpolator: forFade,
        header: ({scene, previous, navigation}) => {
          const {options} = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name;
          return (
            <MenuHeader
              title={title}
              navigation={navigation}
              leftIcon={previous ? true : false}
            />
          );
        },
      }}>
      <Stack.Screen name="Index" component={Home} options={{title: ''}} />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{title: 'Orders'}}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={({route}) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen name="Locations" component={Locations} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen
        name="ProductsDetails"
        component={ProductsDetails}
        options={({route}) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{title: 'Cart'}}
      />
      <Stack.Screen
        name="PaymentMethods"
        component={PaymentMethods}
        options={{title: 'Payment Methods'}}
      />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen
        name="SuccessPayment"
        component={SuccessPayment}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
