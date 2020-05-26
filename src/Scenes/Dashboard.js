import React , { useState} from 'react';
import { View, Dimensions, Animated } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { ScreenOne, ScreenTwo, ScreenThree, ScreenFour } from './Screens'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Tab = createBottomTabNavigator();

// const config = {
//     animation: 'spring',
//     config: {
//       stiffness: 1000,
//       damping: 500,
//       mass: 3,
//       overshootClamping: true,
//       restDisplacementThreshold: 0.01,
//       restSpeedThreshold: 0.01,
//     },
//   };
const forFade = ({ current, closing }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
const Dashboard = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='ScreenOne'
                tabBarOptions={{
                    activeTintColor: '#93278f'
                }}
            >
            <Tab.Screen
                name='ScreenOne'
                component={ScreenOne}
                options={{
                    tabBarLabel: 'One',
                    tabBarIcon: () => <FontAwesomeIcon icon={ faCheck } style={{ color: '#212121' }}/>,
                }}
            />
            <Tab.Screen
                name='ScreenTwo'
                component={ScreenTwo}
                options={{
                    tabBarLabel: 'Two',
                    tabBarIcon: () => <FontAwesomeIcon icon={ faCheck } style={{ color: '#212121' }}/>
                }}
            />
            <Tab.Screen
                name='ScreenThree'
                component={ScreenThree}
                options={{
                    tabBarLabel: 'Three',
                    tabBarIcon: () => <FontAwesomeIcon icon={ faCheck } style={{ color: '#212121' }}/>
                }}
            />
            <Tab.Screen
                name='ScreenFour'
                component={ScreenFour}
                options={{
                    tabBarLabel: 'Four',
                    tabBarIcon: () => <FontAwesomeIcon icon={ faCheck } style={{ color: '#212121' }}/>
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
    )
}

export {
    Dashboard
};