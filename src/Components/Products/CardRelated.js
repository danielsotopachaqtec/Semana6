import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions, Platform, TouchableOpacity } from 'react-native'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        marginHorizontal: Platform.OS === 'ios' ? 10 : 5,
        borderRadius: 10,
        marginBottom: 20
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    containerDetails: {
        flex: 1,
        marginTop: 10
    },
    imageProduct: {
        width: 70,
        height: 70,
        resizeMode: 'stretch',
    },
    productName: {
        color: '#ffffff', 
        fontSize: 12,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    productPrice: {
        color: '#ffffff', 
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
const CardRelated = (props) => {
    const { imageProduct, productName, productPrice, backgroundColor, onPress } = props
    const goToProduct = (item, index) => {
        console.warn(' this.props.goToProduct Function', onPress)
        onPress && onPress(item, index)
    }
    return(
        <TouchableOpacity onPress={goToProduct}>
            <View style={[styles.container, {backgroundColor: backgroundColor}]}>
                <View style={{ flex: 1, marginVertical: 10 }}>
                    <View style={styles.imageContainer}>
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
            </View>
        </TouchableOpacity>
    )
}

export {
    CardRelated
}