import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from '../Scenes/Login'
const Stack = createStackNavigator();

const AuthStackNavigator = (props) => {
  const forFade = ({ current, closing }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Stack.Navigator
        initialRouteName="Login"
        headerMode="none"
    >
      <Stack.Screen 
        name="Login"
        component={Login}
        options={{ cardStyleInterpolator: forFade }}
      />
    </Stack.Navigator>
  );
}

export {
    AuthStackNavigator
}