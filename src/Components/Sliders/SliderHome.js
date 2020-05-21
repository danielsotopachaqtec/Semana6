import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Dimensions, Animated } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    containerScroll:{
        width: 200,
        height: 2,
        backgroundColor: '#cccccc',
        overflow: "hidden"
    },
    scrollElement:{
        position: 'absolute',
        top:0,
        left: 0,
        width: 50,
        backgroundColor: '#93278f'
    },
    barContainer: { 
        position: 'absolute',
        zIndex: 2,
        top: 40,
        flexDirection: 'row'
    },
    bar: {
        backgroundColor:'#93278f',
        height: 2,
        position: 'absolute',
        left: 0,
        top: 0
    },
    track: {
        backgroundColor: '#cccccc',
        overflow: 'hidden',
        height: 2
    }
})

export default class SliderHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            scrollNavigate: ''
        }
    }

    
    render(){
        const { children } = this.props;
        const animValue = new Animated.Value(0);
        const barSpace = 20;
        const numImages = 6;
        const itemWidth = (280 / numImages) - ((numImages - 1) * barSpace)
        const scrollBarValue = animValue.interpolate({
            inputRange: [0,150],
            outputRange: [150,0],
            extrapolate: 'clamp'
        })
        const thisBar = (
            <View
                style={[
                    styles.track,
                    {
                        width: itemWidth,
                        marginLeft: barSpace
                    }
                ]}
            >
            <Animated.View
                style={[styles.bar,
                {
                    width: itemWidth,
                    transform: [
                        {translateX: scrollBarValue}
                    ]
                }]}
            />
            </View>
        )
        return(
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                    Animated.event(
                        [{nativeEvent: {
                            contentOffset: { x: animValue}
                        }}]
                    )
                    let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.y}`
                    // console.warn(logData);
                }}
                scrollEventThrottle={10}
            >  
                {children}
                <View style={styles.barContainer}>
                    {thisBar}
                </View>
            </ScrollView>
        )
    }
}
