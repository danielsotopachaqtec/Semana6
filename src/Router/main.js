import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Dashboard from '../Scenes/Dashboard';
import Home from '../Scenes/Home';
import Intro from '../Scenes/Intro';
import Products from '../Scenes/Products';
import ProductsDetails from '../Scenes/ProductsDetails';
import ProductAnimation from '../Scenes/ProductAnimation'
const Stack = createStackNavigator();

const MainStackNavigator = (props) => {
  const forFade = ({ current, closing }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Stack.Navigator
        initialRouteName="Index"
        headerMode="screen"
    >
      <Stack.Screen 
        name="Index"
        component={Home}
        options={{ 
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          header: ({ scene, previous, navigation }) => {
            return (
              undefined
            );
          }
          }}

      />
      <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ 
        cardStyleInterpolator: forFade,
        gestureEnabled: false,
        headerLeft: ({ scene, previous, navigation }) => {
            return (
              undefined
            );
          }
        }}
      />
      <Stack.Screen
      name="Intro"
      component={Intro}
      options={{
        cardStyleInterpolator: forFade,
        gestureEnabled: false,
        headerLeft: ({ scene, previous, navigation }) => {
            return (
              undefined
            );
          }}}
      />
      <Stack.Screen
      name="Products"
      component={Products}
      options={{ 
        cardStyleInterpolator: forFade,
        gestureEnabled: false,
        headerLeft: ({ scene, previous, navigation }) => {
            return (
              undefined
            );
          }}}
      />
      <Stack.Screen
      name="ProductsDetails"
      component={ProductsDetails}
      options={{ 
        cardStyleInterpolator: forFade,
        headerTitle: 'Product detail',
        headerLeft: ({ scene, previous, navigation }) => {
            return (
              undefined
            );
          }
        }}
      />
      <Stack.Screen
      name="ProductAnimation"
      component={ProductAnimation}
      options={{ 
        cardStyleInterpolator: forFade,
        headerTitle: 'Products',
        headerLeft: ({ scene, previous, navigation }) => {
            return (
              undefined
            );
          }
        }}
      />
    </Stack.Navigator>
  );
}

export {
    MainStackNavigator
}