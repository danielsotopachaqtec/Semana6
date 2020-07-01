import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import MenuFooter from '../Components/Menu/MenuFooter';
import ImageProductDetail from '../Components/Products/ImageProductDetail';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  containerSafeArea: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  price: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    color: '#212121',
    marginTop: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#212121',
    marginTop: 5,
  },
  productDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  productDetails: {
    flex: 0.8,
  },
  colorContainer: {
    width: width * 0.13,
    height: 55,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: this.props.route.params.order,
    };
  }
  componentDidMount() {}
  render() {
    const {order} = this.state;
    console.warn('order', order.product);
    return (
      <SafeAreaView style={styles.containerSafeArea}>
        <ScrollView nestedScrollEnabled={true}>
          <View style={styles.container}>
            {order && order.product.imagesProducts.length > 0 ? (
              <ImageProductDetail
                image={{uri: order.product.productImage}}
                images={order.product.imagesProducts}
              />
            ) : null}
            <Text style={styles.price}>{`$ ${order.totalPrice}`}</Text>
            <View style={styles.productDetailsContainer}>
              <View style={styles.productDetails}>
                <Text numberOfLines={2} style={styles.title}>
                  {order.product.name}
                </Text>
                <Text numberOfLines={4} style={styles.subtitle}>
                  {`Detalle de la orden: ${order.details}`}
                </Text>
                <Text numberOfLines={4} style={styles.subtitle}>
                  {`Ubicacion: ${order.location}`}
                </Text>
              </View>
              <View
                style={[styles.colorContainer, {backgroundColor: order.color}]}
              />
            </View>
          </View>
        </ScrollView>
        <MenuFooter navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}
