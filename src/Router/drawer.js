import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MenuDrawer} from '../Components/Menu/MenuDrawer';
import {MainStackNavigator} from './main';
import {AuthStackNavigator} from './auth';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerStackNavigator = (props) => {
  console.warn('props', props);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={'AuthStackNavigator'}
        drawerContent={(parameters) => <MenuDrawer {...parameters} />}>
        <Drawer.Screen
          name="AuthStackNavigator"
          component={AuthStackNavigator}
          options={{
            gestureEnabled: false,
          }}
        />
        <Drawer.Screen name="Home" component={MainStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export {DrawerStackNavigator};
