import React from 'react'
import {  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Platform} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft, faBars, faCheck } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        paddingTop: Platform.OS === 'ios' ? 20 : 5,
        alignItems: 'center'
    },
    menuHamburger: {
        flex: 0.2,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 16,
        color: '#212121',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftIcon: {
        flex: 0.1
    },
    rightIcon: {
        flex: 1
    }
})

const MenuHeader = (props) => {
    const { title, leftIcon, rightIcon, navigation } = props;
    // const openDrawer = () => {

    // }
    return(
            <View style={styles.container}>
            {leftIcon ? (
                <View style={styles.leftIcon}>
                    <TouchableOpacity 
                        onPress={() => navigation.goBack()}    
                    > 
                        <FontAwesomeIcon 
                            size={ 30 }
                            style={{ color: '#212121' }}
                            icon={ faAngleLeft }
                        />
                    </TouchableOpacity> 
                </View>
            ): (
                <View style={styles.menuHamburger}>
                    <TouchableOpacity 
                        onPress={() => navigation.openDrawer()}    
                    >
                        <FontAwesomeIcon 
                            icon={ faBars }
                            size={ 30 }
                            style={{ color: '#212121' }}
                        />
                    </TouchableOpacity> 
                </View>
            )}
                <View style={styles.title}>
                    <Text style={styles.titleText} >{title}</Text>
                </View>
            {rightIcon ? (
                <View style={styles.rightIcon}>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}    
                >
                    <FontAwesomeIcon 
                        icon={ faCheck }
                        size={ 30 }
                        style={{ color: '#212121' }}
                    /> 
                </TouchableOpacity> 
            </View>
            ): null}  
            </View>
    )
}

export {
    MenuHeader
}