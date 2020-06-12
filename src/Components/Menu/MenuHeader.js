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
        paddingTop: 20,
        alignItems: 'center'
    },
    menuHamburger: {
        flex: 0.2,
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
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
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const MenuHeader = (props) => {
    const { title, leftIcon, rightIcon, navigation, styleContainer } = props;
    // const openDrawer = () => {

    // }
    return(
            <View style={[styles.container, styleContainer]}>
            {leftIcon ? (
                <View style={styles.leftIcon}>
                    <TouchableOpacity 
                        onPress={() => navigation.goBack()}    
                    > 
                        <FontAwesomeIcon 
                            size={ 25 }
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
                            size={ 25 }
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