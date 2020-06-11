import React from 'react'
import { Text, Platform } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Dashboard from '../Scenes/Dashboard';
import Home from '../Scenes/Home';
import Intro from '../Scenes/Intro';
import Products from '../Scenes/Products';
import ProductsDetails from '../Scenes/ProductsDetails';
import ProductAnimation from '../Scenes/ProductAnimation'
import { MenuHeader } from '../Components/Menu/MenuHeader'
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
        headerMode='float'
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
        header: ({ scene, previous, navigation }) => {
          console.warn('scene', scene)
          console.warn('previous', previous)
          // const { options } = scene.descriptor;
          // const title =
          // options.headerTitle !== undefined
          //   ? options.headerTitle
          //   : options.title !== undefined
          //   ? options.title
          //   : scene.route.name;
            return (
              <MenuHeader 
              title={'Dashboard'}
              // leftIcon={previous ? true : false}
              navigation={navigation}
              />
            );
          },
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