import React , { useState} from 'react';
import { View, Dimensions, Animated, Text } from 'react-native'
import MenuFooter from '../Components/Menu/MenuFooter'

const Dashboard = (props) => {
    return (
        <View>
            <Text>Hola Hola</Text>
            <MenuFooter navigation={props.navigation}/>
        </View>
    )
}

export {
    Dashboard
};