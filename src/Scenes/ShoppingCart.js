import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, SafeAreaView, ScrollView, Platform } from 'react-native'
import MenuFooter from '../Components/Menu/MenuFooter'
import Button from '../Components/Forms/Button'
import { CartItem } from '../Components/ShoppingCart/CartItem'
import { DetailsPayment } from '../Components//ShoppingCart/DetailsPayment'
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    containerSafeArea: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    },
    price: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 20
    },
    stock:{
        fontSize: 14,
        color: '#7b1fa2',
        marginTop: 5
    },
    outStock: {
        fontSize: 14,
        color: '#cccccc',
        marginTop: 5
    },
    title: {
        fontSize: 20,
        color: '#212121',
        marginTop: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#212121',
        marginTop: 5
    },
    colorTitle: {
        fontSize: 18,
        color: '#212121',
        marginTop: 20
    },
    relatedTitle: {
        fontSize: 18,
        color: '#212121',
        marginTop: Platform.OS == 'ios' ? 0 : 10,
        marginBottom: 10
    },
    productDetailsContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    productDetails: {
        flex: 0.5
    },
    buyButtonContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buyButton: {
        backgroundColor: '#93278f',
        height: width * 0.15,
        paddingHorizontal: width * 0.10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff'
    },
    textBuyButton: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15
    },
    detailContainer: {
        position: 'relative',
        top: height * 0.30
    }
})

export default class ShoppingCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            disabledButton: true,
            product: '',
            selectedProduct: ''
        }
    }
    componentDidMount(){
        const { product, selectedProduct } = this.props.route.params
        // console.warn('product ShoppingCart', product, 'selectedProduct ShoppingCart', selectedProduct)
        this.setState({
            product: product,
            selectedProduct: selectedProduct
        })
    }
    removeProduct = () => {
        this.setState({
            product: '',
            selectedProduct: ''
        })
    }
    goToBuy = () => {
        const { product, selectedProduct } = this.state
        this.props.navigation.navigate('PaymentMethods', {
            product: product,
            selectedProduct: selectedProduct
        })
    }
    render(){
        const { product, selectedProduct } = this.state
        const { _id, color, stock} = selectedProduct
        const { price, qty, name, description, productImage } = product
        console.warn(price, qty, name, description, productImage)
        return(
            <SafeAreaView style={styles.containerSafeArea}>
                <ScrollView nestedScrollEnabled={true}>
                    {this.state.product ? (
                        <View style={styles.container}>
                            <Text style={styles.title}>My cart</Text>
                            <View style={{ flex: 1, marginTop: 30}}>
                                {console.warn('this.state.product', this.state.product ? 'Hola' : 'Bye')}
                                
                                    <CartItem
                                        productImage={productImage}
                                        productName={name}
                                        color={color}
                                        price={price}
                                        onPress={() => {
                                            this.removeProduct()
                                        }}
                                    />
                                
                            </View>
                            <View style={styles.detailContainer}>
                            <DetailsPayment 
                                price={parseInt(price)}
                                shipping={parseInt(8)}
                                onPress={this.goToBuy}
                            />
                            </View>
                            </View>
                        ): (
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                <Text style={{ fontSize: 20 }}>Shopping cart is empty</Text>
                            </View>
                        )}
                </ScrollView>
            <MenuFooter navigation={this.props.navigation}/>
            </SafeAreaView>
            
        )
    }
}