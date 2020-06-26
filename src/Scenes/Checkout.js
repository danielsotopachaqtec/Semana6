import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView, ScrollView, Platform } from 'react-native'
import MenuFooter from '../Components/Menu/MenuFooter'
import Api from '../Api'
import Button from '../Components/Forms/Button'
import Input from '../Components/Forms/Input'
import CustomModal from '../Components/Modal/CustomModal'
import { CardPayment } from '../Components//ShoppingCart/CardPayment'
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    containerSafeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF'
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
    action: {
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
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
    textInput: {
        marginTop: 5,
        paddingBottom: 5,
        color: '#212121',
      },
    productDetailsContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    productDetails: {
        flex: 0.5
    },
    detailContainer: {
        position: 'relative',
        top: height * 0.30
    },
    buyButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    buyButton: {
        width: '100%',
        backgroundColor: '#93278f',
        height: 50,
        marginHorizontal: 30,
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
    secureCardData: {
        flex: 1,
        flexDirection: 'row'
    },
    expiresDate: {
        flex: 0.6
    },
    dataCvv: {
        marginLeft: 25,
        flex: 0.3,
    },
    paymentContainer: {
        marginHorizontal: 20
    },
    buttonContainerModal: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#93278f',
        marginTop: 18,
        height: Platform.OS === 'android' ?  height * 0.08 : width * 0.12,
        borderRadius: 5
    },
    textButtonModal: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15
    },
})

export default class ShoppingCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            disabledButton: true,
            product: '',
            selectedProduct: '',
            cardNumber: '',
            cardHolder: '',
            expireDate: '',
            cvv: '',
            isVisible: ''
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
    sendPayment = () => {
        const { cardNumber,
            cardHolder,
            expireDate,
            cvv,
            product,
            selectedProduct
         } = this.state
        const parameters = {
            product: product._id,
            quantity: 1,
            details: product.message,
            location: product.location,
            totalPrice: product.price,
            color: selectedProduct.color
        }
        Api.OrderApi.createOrder(parameters)
        .then((data) => {
            if(data.errors){
                console.warn('data.errors', data.errors)
                this.setState({
                    isVisible: true
                })
            } else {
                this.props.navigation.navigate('SuccessPayment')
            }
        })
        .catch(err => {
            console.warn('Response err', err) 
        })
    }
    onChangeText = (value, type) => {
        if(type === 'cardNumber'){
          this.setState({ 
            cardNumber: this.inputCardNumber.state.value
          })
        }
        if(type === 'cardHolder') {
          this.setState({
            cardHolder: this.inputCardHolder.state.value
          })
        }
        if(type === 'expireDate') {
          this.setState({
            expireDate: this.inputExpireDate.state.value
          })
        }
        if(type === 'cvv') {
            this.setState({
                cvv: this.inputCvv.state.value
            })
          }
        if(value.length > 0 && (this.inputCardNumber.state.validate &&
            this.inputCardHolder.state.validate &&
            this.inputExpireDate.state.validate &&
            this.inputCvv.state.validate)
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
    render(){
        const { cardNumber, cardHolder, expireDate, cvv, disabledButton, isVisible } = this.state
        const { product, selectedProduct, paymentMethods } = this.props.route.params
        console.warn(product, selectedProduct, paymentMethods)
        return(
            <SafeAreaView style={styles.containerSafeArea}>
                <ScrollView>
                        <View style={styles.container}>
                            <CardPayment 
                                item={paymentMethods}
                            />
                            <View style={styles.paymentContainer}>
                            <>
                                <View style={styles.action}>
                                    <Input
                                        label='Card number'
                                        labelStyle={styles.title}
                                        value={cardNumber}
                                        ref={(ref) => this.inputCardNumber = ref}
                                        type='cardNumber'
                                        placeholder=''
                                        placeholderTextColor='#cccccc'
                                        TextInputStyle={styles.textInput}
                                        keyboardType='numeric'
                                        maxLength={16}
                                        onChange={(value) => this.onChangeText(value, 'cardNumber')}
                                    />
                                </View>
                                <View style={styles.action}>
                                <Input 
                                    label='Card holder'
                                    labelStyle={styles.title}
                                    value={cardHolder}
                                    ref={(ref) => this.inputCardHolder = ref}
                                    type='name'
                                    placeholder=''
                                    placeholderTextColor='#cccccc'
                                    TextInputStyle={styles.textInput}
                                    maxLength={60}
                                    onChange={(value) => this.onChangeText(value, 'cardHolder')}
                                    />
                                </View>
                                <View style={styles.secureCardData}>
                                    <View style={[styles.expiresDate, styles.action]}>
                                        <Input
                                        label='Expire Date'
                                        labelStyle={styles.title}
                                        value={expireDate}
                                        ref={(ref) => this.inputExpireDate = ref}
                                        type='expireDate'
                                        placeholder='XX/XX'
                                        placeholderTextColor='#cccccc'
                                        keyboardType='numeric'
                                        onChange={(value) => this.onChangeText(value, 'expireDate')}
                                        TextInputStyle={styles.textInput}
                                        maxLength={5}
                                        />
                                    </View>
                                    <View style={[styles.dataCvv, styles.action]}>
                                        <Input
                                        label='CVV'
                                        labelStyle={styles.title}
                                        value={cvv}
                                        ref={(ref) => this.inputCvv = ref}
                                        type='number'
                                        placeholder='XXX'
                                        placeholderTextColor='#cccccc'
                                        keyboardType='numeric'
                                        onChange={(value) => this.onChangeText(value, 'cvv')}
                                        TextInputStyle={styles.textInput}
                                        maxLength={3}
                                        />
                                    </View>
                                </View>
                                <View style={styles.buyButtonContainer}>
                                    <Button 
                                        onPressButton={this.sendPayment}
                                        styleButton={styles.buyButton}
                                        styleText={styles.textBuyButton}
                                        title={'Realizar pago'}
                                        disabled={disabledButton}
                                        />
                                </View>
                                </>
                            </View>
                        </View>
                            <CustomModal
                            visible={isVisible}
                            backdrop={()=> this.setState({
                                isVisible: false
                            })}
                            title={'Ha ocurrido un error'}
                            message={'Intentelo mas tarde.'}
                            iconError={true}
                            >
                            <Button 
                                onPressButton={()=> this.setState({
                                isVisible: false
                                })}
                                styleButton={styles.buttonContainerModal}
                                styleText={styles.textButtonModal}
                                title='Entendido'
                            />
                        </CustomModal>
                </ScrollView>
            </SafeAreaView>
        )
    }
}