import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const style = StyleSheet.create({
    colorContainer: {
        width: width * 0.13,
        height: 55,
        borderRadius: 40,
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const ColorsProduct = (props) => {
    const { color, onPress, active } = props
    const selectedProduct = (item, index) => {
        console.warn(' this.props.selected Function', onPress)
        onPress && onPress(item, index)
    }
    return(
        <TouchableOpacity onPress={selectedProduct}>
            <View style={[style.colorContainer, {backgroundColor: color} ]}>
                {active ? (
                    <FontAwesomeIcon 
                    icon={ faCheck }
                    style={{ color: '#ffffff' }}
                    size={20}
                  />
                ): null}
            </View>
        </TouchableOpacity>
    )
}

export {
    ColorsProduct
}