import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Dashboard from '../Scenes/Dashboard';
import Home from '../Scenes/Home';
import Intro from '../Scenes/Intro';
import Products from '../Scenes/Products';
import ProductsDetails from '../Scenes/ProductsDetails';
import { AuthStackNavigator } from './auth'
const Stack = createStackNavigator();

const MainStackNavigator = (props) => {
  const forFade = ({ current, closing }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Stack.Navigator
        initialRouteName="Login"
        headerMode="screen"
    >
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{ cardStyleInterpolator: forFade }}
      />
      <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ cardStyleInterpolator: forFade }}
      />
      <Stack.Screen
      name="Intro"
      component={Intro}
      options={{ cardStyleInterpolator: forFade }}
      />
      <Stack.Screen 
        name={"Login"}
        component={AuthStackNavigator}
        options={({ route }) => ({
          cardStyleInterpolator: forFade,
          header: ({ scene, previous, navigation }) => {
            return (
              undefined
            );
          }
        })}

      />
      <Stack.Screen
      name="Products"
      component={Products}
      options={{ cardStyleInterpolator: forFade }}
      />
      <Stack.Screen
      name="ProductsDetails"
      component={ProductsDetails}
      options={{ 
        cardStyleInterpolator: forFade,
        headerTitle: 'Product detail'
        }}
      />
    </Stack.Navigator>
  );
}

export {
    MainStackNavigator
}