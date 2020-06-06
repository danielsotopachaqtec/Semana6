import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MenuDrawer } from '../Components/Menu/MenuDrawer'
import { MainStackNavigator } from './main'

const Drawer = createDrawerNavigator();

const DrawerStackNavigator = (props) => {
        console.warn('props', props)
        return(
            <Drawer.Navigator
            // initialRouteName={'MainNavigation'}
            drawerContent={(props) => <MenuDrawer {...props}/>}
            >
                <Drawer.Screen
                    name='MainNavigation' 
                    component={MainStackNavigator}
                    options={{ drawerLabel: 'Home' }}
                    />
            </Drawer.Navigator>
        )
}

export {
    DrawerStackNavigator
}