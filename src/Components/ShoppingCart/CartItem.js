import React from 'react'
import { View , Text , Image , ScrollView , StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Button from '../Forms/Button'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    containerImage: {
        flex: 0.3
    },
    image: {
        width: 80,
        height: 120
    },
    containerDetail: {
        flex: 0.6
    },
    productName: {
        fontSize: 16,
        color: '#212121',
        marginHorizontal: 10,
    },
    colorDetail: {
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    color: {
        width: 20,
        height: 20,
        borderRadius: 40,
        marginLeft: 10,
        marginVertical: 16
    },
    price: {
        fontSize: 20,
        color: '#212121',
        marginHorizontal: 10,
        fontWeight: 'bold'
    },
    qty: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
})

const CartItem = (props) => {
    const { productImage,
        productName,
        color,
        price,
        onPress
    } = props
    const removeProduct = (item, index) => {
        console.warn('removeProduct', removeProduct)
        onPress && onPress(item, index)
    }
    return (
        
        <View style={styles.container}>
            <View style={styles.containerImage}>
            {productImage ? (
                <Image 
                    style={styles.image}
                    source={{uri: productImage}}
                />
            ): null}
                
            </View>
            <View style={styles.containerDetail}>
            {productName ? (
                <Text style={styles.productName}>{productName}</Text>
            ): null}
                {color ? (
                    <View style={styles.colorDetail}>
                        <Text>Color</Text>
                        <View style={[ styles.color ,{ backgroundColor: color }]}></View>
                    </View>
                ) : null}
                {price ? (
                    <Text style={styles.price}>{`$ ${price}`}</Text>
                ) : null}
            </View> 
            {removeProduct ? (
                <View style={styles.qty}> 
                    <TouchableOpacity onPress={removeProduct}>
                    <FontAwesomeIcon 
                            icon={ faTrashAlt }
                            size={ 20 }
                            style={{ color: '#bbbbbb' }}
                        /> 
                    </TouchableOpacity>
                </View>
            ): null}
        </View>
    )
}

export {
    CartItem
}