
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackNavigator } from './Router/main'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
    render(){
        return (
            <NavigationContainer>
              <MainStackNavigator/>
            </NavigationContainer>
          )
    }
}