import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, SafeAreaView } from 'react-native'
import MenuFooter from '../Components/Menu/MenuFooter'
import ImageProductDetail from '../Components/Products/ImageProductDetail';


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
    }
})
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
    render(){
        const { imagesProducts } = this.state
        const { productPrice, qty, productName, description, imageProduct } = this.props.route.params
        return(
            <SafeAreaView style={styles.containerSafeArea}>
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
                </View>
            <MenuFooter navigation={this.props.navigation}/>
            </SafeAreaView>
            
        )
    }
}