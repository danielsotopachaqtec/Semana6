import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, SafeAreaView } from 'react-native'
import {SliderHome} from '../Components/Sliders/SliderHome'
import SliderFullView from '../Components/Sliders/SliderFullView'
import CardProduct from '../Components/Products/CardProduct'
import MenuFooter from '../Components/Menu/MenuFooter'


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const sliders = [
    {id: 1, image: require('../../assets/photo_product_slider_1.jpeg'), title: 'Step 1'},
    {id: 2, image: require('../../assets/photo_product_slider_2.jpeg'), title: 'Step 2'},
    {id: 3, image: require('../../assets/photo_product_slider_3.jpeg'), title: 'Step 3'},
    {id: 4, image: require('../../assets/photo_product_slider_4.jpeg'), title: 'Step 4'},
    {id: 5, image: require('../../assets/photo_product_slider_5.jpeg'), title: 'Step 5'},
    {id: 6, image: require('../../assets/photo_product_slider_6.jpeg'), title: 'Step 6'},
]
const products = [
    {imageBrand: require('../../assets/logo-apple-test.png'),imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'), productName: 'Iphone Xs 64Gb', productPrice: '$1250', color: '#7b1fa2'},
    {imageBrand: require('../../assets/logo-apple-test.png'),imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'), productName: 'Iphone Xs 64Gb', productPrice: '$1250', color: '#d32f2f'},
    {imageBrand: require('../../assets/logo-apple-test.png'),imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'), productName: 'Iphone Xs 64Gb', productPrice: '$1250', color: '#1976d2'},
    {imageBrand: require('../../assets/logo-apple-test.png'),imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'), productName: 'Iphone Xs 64Gb', productPrice: '$1250', color: '#0097a7'},
    {imageBrand: require('../../assets/logo-apple-test.png'),imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'), productName: 'Iphone Xs 64Gb', productPrice: '$1250', color: '#388e3c'},
    {imageBrand: require('../../assets/logo-apple-test.png'),imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'), productName: 'Iphone Xs 64Gb', productPrice: '$1250', color: '#ffa000'}
]

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerSafeArea: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    }
})
export default class Products extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        console.warn('componentDidMount this.props.route', this.props.route)
    }
    render(){
        console.warn('this.props.navigation', this.props.navigation)
        return(
            <SafeAreaView style={styles.containerSafeArea}>
                <View style={styles.container}>
                    <View style={{ marginTop: height * 0.22 }}>
                    <Text style={{ fontSize: 18, marginHorizontal: 15, marginVertical: 15, fontWeight: 'bold' }}>{'Recommended'}</Text>
                        <SliderFullView>
                            <FlatList
                                data={products}
                                horizontal
                                renderItem={({item, index}) => (
                                    <CardProduct
                                    imageBrand={item.imageBrand}
                                    imageProduct={item.imageProduct}
                                    productName={item.productName}
                                    productPrice={item.productPrice}
                                    backgroundColor={item.color}
                                    />
                                )}
                                keyExtractor={item => item.id}
                            />
                        </SliderFullView>
                    </View>
                </View>
            <MenuFooter navigation={this.props.navigation}/>
            </SafeAreaView>
            
        )
    }
}