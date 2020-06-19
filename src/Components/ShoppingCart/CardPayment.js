import React from 'react'
import  { Dimensions, Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native'

const { width } = Dimensions.get('window')
const ratio = 228 / 362;
export const PRODUCT_WIDTH = width * 0.8;
export const PRODUCT_HEIGHT = PRODUCT_WIDTH * ratio

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginHorizontal: 15,
        borderRadius: 8,
        width: PRODUCT_WIDTH,
        height: PRODUCT_HEIGHT 
    },
    containerImageBrand: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    imageBrand: {
        width: 120,
        height: 70,
        resizeMode: 'contain',
    }
})
export const CardPayment = (props) => {
    const { item, onPress } = props
    const {imageBrand, color} = item;
    const goToPay = (items, index) => {
        onPress && onPress (items, index)
    }
    return (
        <TouchableOpacity onPress={goToPay}>
            <View style={[styles.container, { backgroundColor: color}]}>
                <View style={styles.containerImageBrand}>
                    <Image
                        source={{uri: imageBrand}}
                        style={styles.imageBrand}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

        