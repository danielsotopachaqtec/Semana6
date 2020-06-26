import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, SafeAreaView, ScrollView, Platform } from 'react-native'
import MenuFooter from '../Components/Menu/MenuFooter'
import Input from '../Components/Forms/Input'
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
        color: '#212121',
        fontWeight: 'bold'
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
    action: {
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
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
    textInput: {
        marginTop: 5,
        paddingBottom: 5,
        color: '#212121',
      },
    textBuyButton: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15
    },
    detailContainer: {
        position: 'relative',
        marginVertical: 30
    },
    paymentContainer: {
        marginHorizontal: 20
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
            disabledButton: true,
            product: product,
            selectedProduct: selectedProduct,
            location: '',
            message: ''
        })
    }
    onChangeText = (value, type) => {
        if(type === 'location'){
          this.setState({ 
            location: this.inputLocation.state.value
          })
        }
        if(type === 'message') {
          this.setState({
            message: this.inputMessage.state.value
          })
        }
        if(value.length > 0 && (this.inputLocation.state.validate &&
            this.inputMessage.state.validate)
            ){
          this.setState({
            disabledButton: false
          })
        } else {
            this.setState({
                disabledButton: true
            })
        }
      }
    removeProduct = () => {
        this.setState({
            product: '',
            selectedProduct: ''
        })
    }
    goToBuy = () => {
        const { product, selectedProduct, location, message } = this.state
        const params = product
        params.location = location;
        params.message = message
        this.props.navigation.navigate('PaymentMethods', {
            product: params,
            selectedProduct: selectedProduct
        })
    }
    render(){
        const { product, selectedProduct, location, message, disabledButton } = this.state
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
                            <View style={styles.paymentContainer}>
                            <>
                                <View style={styles.action}>
                                    <Input
                                        label='Location'
                                        labelStyle={styles.title}
                                        value={location}
                                        ref={(ref) => this.inputLocation = ref}
                                        type='name'
                                        placeholder=''
                                        placeholderTextColor='#cccccc'
                                        TextInputStyle={styles.textInput}
                                        maxLength={90}
                                        onChange={(value) => this.onChangeText(value, 'location')}
                                    />
                                </View>
                                <View style={styles.action}>
                                <Input 
                                    label='Message'
                                    labelStyle={styles.title}
                                    value={message}
                                    ref={(ref) => this.inputMessage = ref}
                                    type='name'
                                    placeholder=''
                                    placeholderTextColor='#cccccc'
                                    TextInputStyle={styles.textInput}
                                    maxLength={120}
                                    onChange={(value) => this.onChangeText(value, 'message')}
                                    />
                                </View>
                                </>
                            </View>
                            <View style={styles.detailContainer}>
                            <DetailsPayment 
                                price={parseInt(price)}
                                shipping={parseInt(8)}
                                onPress={this.goToBuy}
                                disabled={disabledButton}
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