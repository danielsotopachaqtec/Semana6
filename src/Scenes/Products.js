import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, SafeAreaView } from 'react-native'
import {SliderHome} from '../Components/Sliders/SliderHome'
import SliderFullView from '../Components/Sliders/SliderFullView'
import CardProduct from '../Components/Products/CardProduct'
import MenuFooter from '../Components/Menu/MenuFooter'
import { CommonActions } from '@react-navigation/native';
import iphone from '../../assets/iphone_xs_64gb_gold_card_product.png'


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
    {
        imageBrand: require('../../assets/logo-apple-test.png'),
        imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'),
        imagesProducts: [
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
        ],
        qty: 0,
        productName: 'Iphone Xs 64Gb',
        description: 'new Iphone 2020 collection',
        productPrice: '$1250',
        color: '#7b1fa2'
    },
    {
        imageBrand: require('../../assets/logo-apple-test.png'),
        imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'),
        imagesProducts: [
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
        ],
        description: 'new Iphone 2020 collection',
        qty: 10,
        productName: 'Iphone Xs 64Gb',
        productPrice: '$1250',
        color: '#d32f2f'
    },
    {
        imageBrand: require('../../assets/logo-apple-test.png'),
        imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'),
        imagesProducts: [
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
        ],
        description: 'new Iphone 2020 collection',
        qty: 30,
        productName: 'Iphone Xs 64Gb',
        productPrice: '$1250',
        color: '#1976d2'
    },
    {
        imageBrand: require('../../assets/logo-apple-test.png'),
        imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'),
        imagesProducts: [
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
        ],
        description: 'new Iphone 2020 collection',
        qty: 5,
        productName: 'Iphone Xs 64Gb',
        productPrice: '$1250',
        color: '#0097a7'
    },
    {
        imageBrand: require('../../assets/logo-apple-test.png'),
        imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'),
        imagesProducts: [
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
            {uri: 'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png'},
        ],
        description: 'new Iphone 2020 collection',
        qty: 9,
        productName: 'Iphone Xs 64Gb',
        productPrice: '$1250',
        color: '#388e3c'
    },
    {
        imageBrand: require('../../assets/logo-apple-test.png'),
        imageProduct: require('../../assets/iphone_xs_64gb_gold_card_product.png'),
        imagesProducts: [
            {img1: require('../../assets/iphone_xs_64gb_gold_card_product.png')},
            {img2: require('../../assets/iphone_xs_64gb_gold_card_product.png')},
            {img3: require('../../assets/iphone_xs_64gb_gold_card_product.png')},
            {img4: require('../../assets/iphone_xs_64gb_gold_card_product.png')},
            {img5: require('../../assets/iphone_xs_64gb_gold_card_product.png')},
            {img6: require('../../assets/iphone_xs_64gb_gold_card_product.png')},
            {img7: require('../../assets/iphone_xs_64gb_gold_card_product.png')},
            {img8: require('../../assets/iphone_xs_64gb_gold_card_product.png')},
        ],
        description: 'new Iphone 2020 collection',
        qty: 12,
        productName: 'Iphone Xs 64Gb',
        productPrice: '$1250',
        color: '#ffa000'
    }
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
            productDetail: {}
        }
    }
    goToProduct = (item, index) => {
        console.warn('item', item)
        // const { navigation  = this.props;
        // const { productDetail } = this.state;
        this.props.navigation.navigate('ProductsDetails', item)
    }
    render(){
        return(
            <SafeAreaView style={styles.containerSafeArea}>
                <View style={styles.container}>
                    <SliderHome sliders={sliders}/>
                    <View style={{ marginTop: height * 0.22 }}>
                    <Text style={{ fontSize: 18, marginHorizontal: 15, marginVertical: 15, fontWeight: 'bold' }}>{'Recommended'}</Text>
                        <SliderFullView>
                            <FlatList
                                data={products}
                                horizontal
                                renderItem={({item, index}) => (
                                    <CardProduct
                                    onPress={() => this.goToProduct(item, index)}
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