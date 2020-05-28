import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../Scenes/Dashboard';
import Home from '../Scenes/Home';
import Intro from '../Scenes/Intro';
import Products from '../Scenes/Products';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
    >
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
}

export {
    MainStackNavigator
}