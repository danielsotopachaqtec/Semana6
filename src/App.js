
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { DrawerStackNavigator } from './Router/drawer'

// console.disableYellowBox = true;

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
    render(){
        return (
            <NavigationContainer>
              <DrawerStackNavigator/>
            </NavigationContainer>
          )
    }
}