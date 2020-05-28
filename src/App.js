
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackNavigator } from './Router/'
import MenuFooter from './Components/Menu/MenuFooter'

export default class App extends Component {
    render(){
        return (
            <NavigationContainer>
              <MainStackNavigator/>
            </NavigationContainer>
          )
    }
}