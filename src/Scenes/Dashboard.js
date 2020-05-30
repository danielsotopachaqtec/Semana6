import React , { useState} from 'react';
import { View, Dimensions, Animated, Text, SafeAreaView, StyleSheet } from 'react-native'
import MenuFooter from '../Components/Menu/MenuFooter'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    },
})

const Dashboard = (props) => {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <Text>Hola Hola</Text>
        </View>
        <MenuFooter navigation={props.navigation}/>
        </SafeAreaView>
    )
}

export {
    Dashboard
};