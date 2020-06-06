import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MenuDrawer } from '../Components/Menu/MenuDrawer'
import { MainStackNavigator } from './main'
import { AuthStackNavigator } from './auth'

const Drawer = createDrawerNavigator();

const DrawerStackNavigator = (props) => {
        console.warn('props', props)
        return(
            <Drawer.Navigator
            initialRouteName={'AuthStackNavigator'}
            drawerContent={(props) => <MenuDrawer {...props}/>}
            >
                <Drawer.Screen
                    name='AuthStackNavigator' 
                    component={AuthStackNavigator}
                    options={{
                        gestureEnabled: false,
                    }}
                />            
                <Drawer.Screen
                    name='Home' 
                    component={MainStackNavigator}
                />
            </Drawer.Navigator>
        )
}

export {
    DrawerStackNavigator
}