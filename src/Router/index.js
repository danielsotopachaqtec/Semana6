import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Dashboard } from '../Scenes/Dashboard';
import Home from '../Scenes/Home';
import Intro from '../Scenes/Intro';
import Products from '../Scenes/Products';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const forFade = ({ current, closing }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Stack.Navigator
        initialRouteName="Home"
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
      name="Products"
      component={Products}
      options={{ cardStyleInterpolator: forFade }}
      />
    </Stack.Navigator>
  );
}

export {
    MainStackNavigator
}