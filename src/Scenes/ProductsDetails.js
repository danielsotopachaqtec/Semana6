import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, SafeAreaView, ScrollView, Platform } from 'react-native'
import MenuFooter from '../Components/Menu/MenuFooter'
import ImageProductDetail from '../Components/Products/ImageProductDetail';
import { CardRelated } from '../Components/Products/CardRelated'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
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
        fontSize: 24,
        color: '#212121',
        marginTop: 5
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
    }
})

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
        qty: 10,
        colors: [
            {color: '#ff80ab', stock: 0},
            {color: '#37474f', stock: 5}
        ],
        productName: 'Iphone Xs 32gb',
        description: 'last Iphone 2019 collection',
        productPrice: '$1000',
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
        qty: 1,
        colors: [
            {color: '#ff8f00', stock: 10},
            {color: '#558b2f', stock: 5}
        ],
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
        colors: [
            {color: '#ff8f00', stock: 5},
            {color: '#558b2f', stock: 5},
            {color: '#d4e157', stock: 5},
            {color: '#00bfa5', stock: 5},
            {color: '#00b0ff', stock: 5},
            {color: '#1565c0', stock: 5}
        ],
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
        colors: [
            {color: '#ff8f00', stock: 5}
        ],
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
        qty: 40,
        colors: [
            {color: '#ff8f00', stock: 4},
            {color: '#558b2f', stock: 4},
            {color: '#d4e157', stock: 4},
            {color: '#00bfa5', stock: 4},
            {color: '#00b0ff', stock: 4},
            {color: '#1565c0', stock: 4},
            {color: '#ff8f00', stock: 4},
            {color: '#558b2f', stock: 4},
            {color: '#d4e157', stock: 4},
            {color: '#00bfa5', stock: 4},
        ],
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
        colors: [
            {color: '#ff8f00', stock: 4},
            {color: '#558b2f', stock: 4},
            {color: '#d4e157', stock: 4},
        ],
        productName: 'Iphone Xs 64Gb',
        productPrice: '$1250',
        color: '#ffa000'
    }
]
export default class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            imagesProducts: []
        }
    }
    componentDidMount(){
        const { imagesProducts } = this.props.route.params
        console.warn('componentDidMount imagesProducts', imagesProducts)
        console.warn('componentDidMount this.props.route', this.props.route)
        this.setState({
            imagesProducts: imagesProducts
        })
    }
    goToProduct = (item, index) => {
        console.warn('item', item)
        // const { navigation  = this.props;
        // const { productDetail } = this.state;
        this.props.navigation.navigate('ProductsDetails', item)
    }
    render(){
        const { imagesProducts } = this.state
        const { productPrice, qty, productName, description, imageProduct, colors } = this.props.route.params
        return(
            <SafeAreaView style={styles.containerSafeArea}>
                <ScrollView nestedScrollEnabled={true}>
                <View style={styles.container}>
                    {imagesProducts ? (
                        <ImageProductDetail image={imageProduct} images={imagesProducts}/>
                    ) : null}
                    <Text style={styles.price}>
                        {productPrice}
                    </Text>
                    { qty === 0 ? (
                        <Text style={styles.outStock}>
                            Out stock
                        </Text>
                    ): (
                        <Text style={styles.stock}>
                            In Stock
                        </Text>
                    )
                    }
                    <Text style={styles.title}>
                    {productName}
                    </Text>
                    <Text style={styles.subtitle}>
                    {description}
                    </Text>
                    <Text style={styles.colorTitle}>
                    {'Colors'}
                    </Text>
                    <View style={{ height: height * 0.10 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={120}
                            decelerationRate='fast'
                        >
                            { colors && colors.map((color)=> 
                                color.stock > 0 && <View style={{ 
                                    backgroundColor: color.color, 
                                    width: width * 0.13,
                                    height: 55,
                                    borderRadius: 40,
                                    marginHorizontal: 10,
                                    marginVertical: 10
                                    }}>

                                    </View>
                            )
                            }
                        </ScrollView>
                    </View>
                    <Text style={styles.relatedTitle}>
                        {'Related'}
                    </Text>
                    <View style={{ flex: 1}}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={100}
                            decelerationRate='fast'
                        >
                            { products && products.map((item, index)=> 
                                item.qty > 0 && <CardRelated
                                    onPress={() => this.goToProduct(item, index)}
                                    backgroundColor={item.color} 
                                    imageProduct={item.imageProduct}
                                    productName={item.productName}
                                    productPrice={item.productPrice}
                                />
                            )
                            }
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
            <MenuFooter navigation={this.props.navigation}/>
            </SafeAreaView>
            
        )
    }
}