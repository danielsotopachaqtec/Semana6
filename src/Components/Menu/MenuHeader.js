import React from 'react'
import {  View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft, faBars, faCheck } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        paddingVertical: 30,
        justifyContent: 'center',
    },
    menuHamburger: {
        flex: 0.3,
        marginLeft: 10
    },
    title: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        color: '#212121'
    },
    leftIcon: {
        flex: 1
    },
    rightIcon: {
        flex: 0.3
    }
})

const MenuHeader = (props) => {
    const { title, leftIcon, rightIcon, navigation } = props;
    // const openDrawer = () => {

    // }
    return(
            <View style={styles.container}>
                <TouchableOpacity
                        style={styles.leftIcon}
                        onPress={() => navigation.goBack()}    
                    > 
                    
                        <FontAwesomeIcon 
                            size={ 30 }
                            style={{ color: '#212121' }}
                            icon={ faAngleLeft }
                        />
                </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuHamburger} 
                        onPress={() => openDrawer()}    
                    >
                        <FontAwesomeIcon 
                            icon={ faBars }
                            size={ 30 }
                            style={{ color: '#212121' }}
                        />
                    </TouchableOpacity> 
                <View style={styles.title}>
                    <Text style={styles.titleText} >{title}</Text>
                </View>
                <TouchableOpacity 
                    style={styles.rightIcon}
                    onPress={() => navigation.goBack()}    
                >
                    <FontAwesomeIcon 
                        icon={ faCheck }
                        size={ 30 }
                        style={{ color: '#212121' }}
                    /> 
                </TouchableOpacity>
            </View>
    )
}

export {
    MenuHeader
}