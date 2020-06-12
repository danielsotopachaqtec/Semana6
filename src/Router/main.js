import React from 'react'
import { Text, Platform } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Dashboard from '../Scenes/Dashboard';
import Home from '../Scenes/Home';
import Intro from '../Scenes/Intro';
import Products from '../Scenes/Products';
import ProductsDetails from '../Scenes/ProductsDetails';
import ProductAnimation from '../Scenes/ProductAnimation'
import { MenuHeader } from '../Components/Menu/MenuHeader'
const Stack = createStackNavigator();

const MainStackNavigator = (props) => {
  const forFade = ({ current, closing }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Stack.Navigator
        initialRouteName="Index"
        headerMode='float'
        screenOptions={{
          headerStyle: {
            height: Platform.OS === 'ios' ? 80 : 65
          }
        }}
    >
      <Stack.Screen
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          title: 'Home',
          header : ({scene, previous, navigation}) => {
          console.warn('scene', scene)
          return (
          <MenuHeader 
            title={'Home'}
            leftIcon={false}
            navigation={navigation}
            styleContainer={scene.descriptor.options.headerStyle}
          />
          )
        }, 
        }} 
        name="Index"
        component={Home}
      />
      <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ 
        cardStyleInterpolator: forFade,
        gestureEnabled: false,
        header : ({scene, previous, navigation}) => {
          console.warn('scene', scene)
          return (
          <MenuHeader 
            title={scene.route.name}
            // leftIcon={previous ? true : false}
            navigation={navigation}
            styleContainer={scene.descriptor.options.headerStyle}
          />
          )
        },        
        }}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          header : ({scene, previous, navigation}) => <MenuHeader 
            title={scene.route.name}
            // leftIcon={previous ? true : false}
            navigation={navigation}
            styleContainer={scene.descriptor.options.headerStyle}
          />
        }}
        name="Intro"
        component={Intro}
      />
      <Stack.Screen
      name="Products"
      component={Products}
      options={{ 
        cardStyleInterpolator: forFade,
        gestureEnabled: false,
        header : ({scene, previous, navigation}) => <MenuHeader 
            title={scene.route.name}
            // leftIcon={previous ? true : false}
            navigation={navigation}
            styleContainer={scene.descriptor.options.headerStyle}
          />
      }}
      />
      <Stack.Screen
      name="ProductsDetails"
      component={ProductsDetails}
      options={{ 
        cardStyleInterpolator: forFade,
        header : ({scene, previous, navigation}) => {
          console.warn('scene', scene)
          console.warn('navigation', navigation)
        return (<MenuHeader 
            title={scene.route.params.productName}
            leftIcon={previous ? true : false}
            navigation={navigation}
            styleContainer={scene.descriptor.options.headerStyle}
          />)
          }
      }}
      />
      <Stack.Screen
      name="ProductAnimation"
      component={ProductAnimation}
      options={{ 
        cardStyleInterpolator: forFade,
        header : ({scene, previous, navigation}) => {
          console.warn('scene', scene)
          console.warn('navigation', navigation)
        return (<MenuHeader 
            title={scene.route.name}
            leftIcon={previous ? true : false}
            navigation={navigation}
            styleContainer={scene.descriptor.options.headerStyle}
          />)
          }
      }}
      />
    </Stack.Navigator>
  );
}

export {
    MainStackNavigator
}