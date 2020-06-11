import React , { useState, Component} from 'react';
import { View, Dimensions, Animated, Text, SafeAreaView, StyleSheet, Button, StatusBar} from 'react-native'
import MenuFooter from '../Components/Menu/MenuFooter'
import { CommonActions } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    },
    containerSafeArea: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    }
})

const products = [
    {imageBrand: require('../../assets/logo-apple-test.png'),imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'), productName: 'Iphone Xs 64Gb', productPrice: '$1250', color: '#7b1fa2'},
    {imageBrand: require('../../assets/logo-apple-test.png'),imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'), productName: 'Iphone Xs 64Gb', productPrice: '$1250', color: '#d32f2f'},
    {imageBrand: require('../../assets/logo-apple-test.png'),imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'), productName: 'Iphone Xs 64Gb', productPrice: '$1250', color: '#1976d2'},
    {imageBrand: require('../../assets/logo-apple-test.png'),imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'), productName: 'Iphone Xs 64Gb', productPrice: '$1250', color: '#0097a7'},
    {imageBrand: require('../../assets/logo-apple-test.png'),imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'), productName: 'Iphone Xs 64Gb', productPrice: '$1250', color: '#388e3c'},
    {imageBrand: require('../../assets/logo-apple-test.png'),imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'), productName: 'Iphone Xs 64Gb', productPrice: '$1250', color: '#ffa000'}
]

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount(){
        console.warn('props', this.props.navigation)
    }
    
    render(){
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.containerSafeArea}>
            <StatusBar barStyle='light-content' />
            <View style={styles.container}>
            <Text>This is the home screen of the app</Text>
          <Button
            onPress={() =>
                navigation.navigate('Home', { products })
            }
            title="Go to Brent's profile"
          />
            </View>
            <MenuFooter navigation={this.props.navigation}/>
            </SafeAreaView>
        )
    }
}

export default Dashboard;