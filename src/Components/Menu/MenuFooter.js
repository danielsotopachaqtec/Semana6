import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, Platform, DeviceEventEmitter } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationContainer from '@react-navigation/native';
const { width: viewPortWidth } = Dimensions.get('window');
const Stack = createStackNavigator();

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#DADADA',
        backgroundColor: '#F9F9F9',
        paddingBottom: 0
    },
    title: {
        color: '#212121',
        fontSize: 12,
        textAlign: 'center'
    },
    buttonFooter: {
        width: viewPortWidth / 4,
        alignItems: 'center',
        paddingHorizontal: 2,
        paddingVertical: 4
    },
    image: {
        height: 36,
        width: 36
    }
})

class MenuFooter extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    onPressMenuFooter = (route) => {
        if(route === 'Home'){
            DeviceEventEmitter.emit('eventHome', true);
        }
        if(route === 'Dashboard'){
            DeviceEventEmitter.emit('eventDashboard', true);
        }
        if(route === 'Intro'){
            DeviceEventEmitter.emit('eventIntro', true);
        }
        if(route === 'Products'){
            DeviceEventEmitter.emit('eventProducts', true);
        }
       this.props.navigation.navigate(route)
    }
    render(){
        return(
            <View>
                    <View style={styles.box}>
                        <View style={styles.buttonFooter}>
                            <TouchableOpacity 
                                style={styles.buttonFooter}
                                onPress={() => this.onPressMenuFooter('Index')}    
                            >
                                <Image 
                                style={styles.image}
                                source={require('../../../assets/icons/025-warehouse.png')}
                                />
                                <Text style={styles.title}>Home</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonFooter}>
                            <TouchableOpacity 
                                style={styles.buttonFooter}
                                onPress={() => this.onPressMenuFooter('Dashboard')} 
                            >
                                <Image 
                                style={styles.image}
                                source={require('../../../assets/icons/017-tracking.png')}
                                />
                                <Text style={styles.title}>Dashboard</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonFooter}>
                            <TouchableOpacity
                                style={styles.buttonFooter}
                                onPress={() => this.onPressMenuFooter('Intro')} 
                            >
                                <Image 
                                style={styles.image}
                                source={require('../../../assets/icons/027-cargo.png')}
                                />
                                <Text style={styles.title}>Intro</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonFooter}>
                            <TouchableOpacity
                                style={styles.buttonFooter}
                                onPress={() => this.onPressMenuFooter('Products')} 
                            >
                                <Image 
                                style={styles.image}
                                source={require('../../../assets/icons/036-smartphone.png')}
                                />
                                <Text style={styles.title}>Products</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        )
    }
}

export default MenuFooter;