/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TextInput
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center'
  },
  header: {
    flex:1
  },
  footer: {
    flex: 2,
    padding: 20
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  title: { 
    color: '#212121',
    fontWeight: 'bold'
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2'
  },
  textInput: {
    flex: 1,
    marginTop: 5,
    paddingBottom: 5,
    color: '#212121'
  }
});

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.header}>
        <ImageBackground
          source={require('./assets/header.png')}
          style={styles.imageBackground}>
          <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 30}}>
            Welcome Back
          </Text>  
          <Text style={{color: '#212121'}}>Sign in to continue</Text>
        </ImageBackground>
      </View>
      <View style={styles.footer}>
        <Text style={[styles.title, { marginTop: 50 }]}>E-mail</Text>
        <View style={styles.action}>
          <TextInput
            placeholder='your email...'
            style={styles.textInput}
            />
        </View>
        <Text style={[styles.title, { marginTop: 20}]}>
          Password
        </Text>
        <View style={styles.action}>
          <TextInput 
            secureTextEntry
            placeholder='your password...'
            style={styles.textInput}
          />
        </View>
      </View>
    </View>
  );
  }
};
