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
        marginVertical: 10,
        marginHorizontal: 10
    },
    imageBrand: {
        width: 50,
        height: 50,
        resizeMode: 'stretch',
    },
    containerImageProduct: {
        justifyContent: 'center',
        alignItems:  'center',
        marginTop: -30
    },
    imageProduct: {
        width: 135,
        height: 135,
        resizeMode: 'stretch',
    },
    containerDetails: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 5,
    },
    productName: {
        flex: 0.8,
        color: '#ffffff', 
        fontSize: 15,
        fontWeight: 'bold'
    },
    productPrice: {
        flex: 0.2,
        color: '#ffffff', 
        fontSize: 15,
        fontWeight: 'bold',
    }
})
export const CardProduct = (props) => {
    const { item, onPress } = props
    console.warn('CardProduct type', item)
    const {imageBrand, imageProduct, productName, productPrice, color} = item;
    const goToProduct = (items, index) => {
        console.warn(' this.props.CardProduct Function', onPress())
        return onPress()
    }
    return (
        <TouchableOpacity onPress={goToProduct}>
            <View style={[styles.container, { backgroundColor: color}]}>
                <View style={styles.containerImageBrand}>
                    <Image
                        source={imageBrand}
                        style={styles.imageBrand}

                    />
                </View>
                <View style={styles.containerImageProduct}>
                    <Image
                        source={imageProduct}
                        style={styles.imageProduct}
                    />
                </View>
                <View style={styles.containerDetails}>
                    <Text style={styles.productName}>
                    {productName}
                    </Text>
                    <Text style={styles.productPrice}>
                    {productPrice}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

        