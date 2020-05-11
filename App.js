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
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import Input from './src/Components/Forms/Input';
import Button from './src/Components/Forms/Button'
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
    flex: 1
  },
  footer: {
    marginHorizontal: 26,
    marginBottom: 10
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
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  textInput: {
    marginTop: 5,
    paddingBottom: 5,
    color: '#212121',
  },
  typing: {
    flexDirection: 'row',
    flex: 1,
    // marginRight: 50,
    marginTop: 40
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
      typingPhoneNumber: false,
      animationSignIn : new Animated.Value(width-40),
      animationSignUp: new Animated.Value(width-50),
      enable: true,
      signUp: false,
      signIn: true,
      login: false,
      email:'',
      password:'',
      phoneNumber:'',
      disabled: true,
      disabledButton: true
    }
  }
  onChangeText = (value, type) => {
    if(type === 'email'){
      if(this.inputEmail.state.validate) {
        this.setState({
          disabled: false
        })
      }
      this.setState({ 
        email: this.inputEmail.state.value
      })
    }
    if(type === 'password') {
      this.setState({
        password: this.inputPassword.state.value
      })
    }
    if(type === 'phoneNumber') {
      this.setState({
        phoneNumber: this.inputPhoneNumber.state.value
      })
    }
    if(this.state.signIn && this.inputEmail.state.validate && this.inputPassword.state.validate){
      this.setState({
        disabledButton: false
      })
    }
    if(this.state.signUp && this.inputEmail.state.validate && this.inputPassword.state.validate && this.inputPhoneNumber.state.validate) {
      this.setState({
        disabledButton: false
      })
    }
  }

  focus = (value) => {
    console.warn('value', value)
    if(value === 'email' ) {
      this.setState({
        typingEmail: true,
        typingPassword: false,
        typingPhoneNumber: false
      })
    }
    if (value === 'password') {
      this.setState({
        typingEmail: false,
        typingPassword: true,
        typingPhoneNumber: false
      })
    }
    if (value === 'phoneNumber') {
      this.setState({
        typingEmail: false,
        typingPassword: false,
        typingPhoneNumber: true
      })
    }
  } 
  _animation = () => {
    const { signIn, signUp } = this.state;
    Animated.timing(
     this.state.animationSignIn, {
        toValue: 40,
        duration: 250
      }
    ).start();
    setTimeout(() => {
      this.setState({
        enable: false,
        typingEmail: false,
        typingPassword: false,
        login: true
      })
    }), 150
  }
  typing = () => {
    return (
      <TypingAnimation
        dotColor='#93278f'
        style={styles.typing}
      />
    )
  }
  changeLoginView = () => {
    const { signIn, signUp } = this.state;
    this.setState({ 
      signIn: !signIn,
      signUp: !signUp,
      enable: true,
      typingEmail: false,
      typingPassword:false,
      typingPhoneNumber: false,
      disabledButton: true
    })
  }
  render(){
    const { animationSignIn, animationSignUp, typingEmail, typingPassword, typingPhoneNumber,enable, signIn, signUp, login, email, password, phoneNumber, disabled, disabledButton } = this.state;
    const width = login && enable ? animationSignUp : signIn ? animationSignIn : animationSignUp ;
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      > 
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
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.footer}>
        {signIn ? (
          <>
          <View style={styles.action}>
            <Input
              label='E-mail'
              labelStyle={styles.title}
              value={email}
              ref={(ref) => this.inputEmail = ref}
              type='email'
              placeholder='your email...'
              placeholderTextColor='#cccccc'
              TextInputStyle={styles.textInput}
              keyboardType='email-address'
              onChange={(value) => this.onChangeText(value, 'email')}
              onFocusInput={() => this.focus('email')}
            />
            { typingEmail ? this.typing() : null}
          </View>
          <View style={styles.action}>
            <Input 
              label='Password'
              labelStyle={styles.title}
              value={password}
              ref={(ref) => this.inputPassword = ref}
              type='password'
              secureTextEntry
              placeholder='your password...'
              placeholderTextColor='#cccccc'
              TextInputStyle={styles.textInput}
              onChange={(value) => this.onChangeText(value, 'password')}
              onFocusInput={() => this.focus('password')}
              editable={disabled}
            />
            { typingPassword ? this.typing() : null}
            
          </View>
          <TouchableOpacity
          onPress={() => {
            this._animation()
            }}>
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
          </>
          ): (
            <>
          <View style={styles.action}>
            <Input
                label='E-mail'
                labelStyle={styles.title}
                value={email}
                ref={(ref) => this.inputEmail = ref}
                type='email'
                placeholder='your email...'
                placeholderTextColor='#cccccc'
                TextInputStyle={styles.textInput}
                keyboardType='email-address'
                onChange={(value) => this.onChangeText(value, 'email')}
                onFocusInput={() => this.focus('email')}
              />
              { typingEmail ? this.typing() : null}
          </View>
          <View style={styles.action}>
          <Input 
              label='Password'
              labelStyle={styles.title}
              value={password}
              ref={(ref) => this.inputPassword = ref}
              type='password'
              secureTextEntry
              placeholder='your password...'
              placeholderTextColor='#cccccc'
              TextInputStyle={styles.textInput}
              onChange={(value) => this.onChangeText(value, 'password')}
              onFocusInput={() => this.focus('password')}
              editable={disabled}
            />
            { typingPassword ? this.typing() : null}
          </View>
          <View style={styles.action}>
            <Input
              label='Phone Number'
              labelStyle={styles.title}
              value={phoneNumber}
              ref={(ref) => this.inputPhoneNumber = ref}
              type='phoneNumber'
              placeholder='your phone number...'
              placeholderTextColor='#cccccc'
              keyboardType='phone-pad'
              onFocusInput={() => this.focus('phoneNumber')}
              onChange={(value) => this.onChangeText(value, 'phoneNumber')}
              TextInputStyle={styles.textInput}
              editable={disabled}
              maxLength={9}
            />
            { typingPhoneNumber ? this.typing() : null}
          </View>
          <Button 
            onPressButton={() => this.setState({
              signUp: false,
              signIn: true
            })}
            styleButton={[styles.buttonContainer, styles.animation]}
            styleText={styles.textLogin}
            title='Sign up'
            disabled={disabledButton}
          />
          </>
          )}
        <View style={styles.signUp}>
          <Text style={{ color: '#212121'}}>New User?</Text>
          <TouchableOpacity onPress={() => this.changeLoginView()}>
            <Text style={{ color: '#4285F4' }}>{signUp ? 'Login' : 'Sign up'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
  }
};
