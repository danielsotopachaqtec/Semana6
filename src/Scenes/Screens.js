import React from 'react';
import { View , Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const ScreenOne = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray'}}>
            <Text>This is the firts screen</Text>
        </View>
    )
}
const ScreenTwo = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
            <Text>This is the second screen</Text>
        </View>
    )
}
const ScreenThree = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
            <Text>This is the third screen</Text>
        </View>
    )
}

const ScreenFour = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
            <Text>This is the four screen</Text>
        </View>
    )
}

export {
    ScreenOne,
    ScreenTwo,
    ScreenThree,
    ScreenFour
}