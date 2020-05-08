/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Animated,
  Dimensions
} from 'react-native';
import { TypingAnimation } from 'react-native-typing-animation'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import * as Animatable from 'react-native-animatable'

const width = Dimensions.get('screen').width;

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
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textLogin: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18
  },
  signUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  animation: {
    backgroundColor: '#93278f',
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      typingEmail: false,
      typingPassword:false,
      animationLogin : new Animated.Value(width-40),
      enable: true
    }
  }

  focus = (value) => {
    if(value === 'email' ) {
      this.setState({
        typingEmail: true,
        typingPassword: false
      })
    } else {
      this.setState({
        typingEmail: false,
        typingPassword: true
      })
    }
  } 
  _animation = () => {
    Animated.timing(
      this.state.animationLogin, {
        toValue: 40,
        duration: 250
      }
    ).start();
    setTimeout(() => {
      this.setState({
        enable: false,
        typingEmail: false,
        typingPassword: false
      })
    }), 150
  }
  typing = () => {
    return (
      <TypingAnimation
        dotColor='#93278f'
        style={{ marginRight: 25}}
      />
    )
  } 
  render(){
    const { animationLogin, typingEmail, typingPassword, enable } = this.state;
    const width = animationLogin;
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
            onFocus={() => this.focus('email')}
            />
            { typingEmail ? this.typing() : null}
        </View>
        <Text style={[styles.title, { marginTop: 20}]}>
          Password
        </Text>
        <View style={styles.action}>
          <TextInput 
            secureTextEntry
            placeholder='your password...'
            style={styles.textInput}
            onFocus={() => this.focus('password')}
          />
          { typingPassword ? this.typing() : null}
          
        </View>
        <TouchableOpacity
        onPress={() => this._animation()}>
          <View style={styles.buttonContainer}>
          <Animated.View style={[styles.animation, { width }]}>
            { enable ? (
              <Text style={styles.textLogin}>
                Login
              </Text>
            ) : (
              <Animatable.View
                animation='bounceIn'
                delay={50}
              >
                <FontAwesomeIcon 
                  icon={ faCheck }
                  style={{ color: '#ffffff' }}
                />
              </Animatable.View>
            ) }
          </Animated.View>
          </View>
        </TouchableOpacity>
        <View style={styles.signUp}>
          <Text style={{ color: '#212121'}}>New User?</Text>
          <Text style={{ color: '#4285F4' }}> Sign up</Text>
        </View>
      </View>
    </View>
  );
  }
};
