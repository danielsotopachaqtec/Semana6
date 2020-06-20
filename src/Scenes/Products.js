import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, SafeAreaView } from 'react-native'
import {SliderHome} from '../Components/Sliders/SliderHome'
import SliderFullView from '../Components/Sliders/SliderFullView'
import CardProduct from '../Components/Products/CardProduct'
import MenuFooter from '../Components/Menu/MenuFooter'
import Api from '../Api'
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
            products: [],
            productDetail: {}
        }
    }
    componentDidMount(){
        Api.ProductApi.getAllProduct()
    .then((result) => {
      console.warn('data Products', result)
      if(result.errors){
        console.warn('data errors', result.errors)
      } else {
        this.setState({
            products: result.data
        })
      }
      console.warn('Response data Products', result)
    })
    .catch((err) => {
      console.warn('data err', err)
    })
    }
    goToProduct = (item, index) => {
        console.warn('item', item)
        // const { navigation  = this.props;
        // const { productDetail } = this.state;
        this.props.navigation.navigate('ProductsDetails', item)
    }
    render(){
        const { products } = this.state
        return(
            <SafeAreaView style={styles.containerSafeArea}>
                <View style={styles.container}>
                    <SliderHome sliders={sliders}/>
                    <View style={{ marginTop: height * 0.22 }}>
                    <Text style={{ fontSize: 18, marginHorizontal: 15, marginVertical: 15, fontWeight: 'bold' }}>{'Recommended'}</Text>
                        <SliderFullView>
                            {products.length !== 0 ? (
                                <FlatList
                                data={products}
                                horizontal
                                renderItem={({item, index}) => (
                                    <CardProduct
                                    onPress={() => this.goToProduct(item, index)}
                                    // imageBrand={item.imageBrand}
                                    imageProduct={{uri: item.productImage}}
                                    productName={item.name}
                                    productPrice={item.price}
                                    backgroundColor={item.color}
                                    />
                                )}
                                keyExtractor={item => item.id}
                            />
                            ): null}
                            
                        </SliderFullView>
                    </View>
                </View>
            <MenuFooter navigation={this.props.navigation}/>
            </SafeAreaView>
            
        )
    }
}