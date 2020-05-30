import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity  } from 'react-native'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginHorizontal: 15,
        width: width * 0.40,
        height: 268,
        borderRadius: 8,
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
        alignItems:  'flex-end',
        marginVertical: 5
    },
    imageProduct: {
        width: 135,
        height: 135,
        resizeMode: 'stretch',
    },
    containerDetails: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 5
    },
    productName: {
        flex: 0.6,
        color: '#ffffff', 
        fontSize: 15,
        fontWeight: 'bold'
    },
    productPrice: {
        flex: 0.4,
        color: '#ffffff', 
        fontSize: 15,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'flex-end',
        fontWeight: 'bold'
    }
});

export default class CardProduct extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    goToProduct = (item, index) => {
        console.warn(' this.props.goToProduct Function', this.props.onPress)
        this.props.onPress && this.props.onPress(item, index)
    }
    render(){
        const {imageBrand, imageProduct, productName, productPrice, backgroundColor} = this.props;
        return (
            <TouchableOpacity onPress={this.goToProduct}>
                <View style={[styles.container, { backgroundColor: backgroundColor}]}>
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
}