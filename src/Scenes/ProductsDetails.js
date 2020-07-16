import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import cartActions from '../actions/CartActions';
import productActions from '../actions/ProductsAction';
import MenuFooter from '../Components/Menu/MenuFooter';
import ImageProductDetail from '../Components/Products/ImageProductDetail';
import {CardRelated} from '../Components/Products/CardRelated';
import {ColorsProduct} from '../Components/Products/ColorsProduct';
import Button from '../Components/Forms/Button';

const height = Dimensions.get('window').height;

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
  stock: {
    fontSize: 14,
    color: '#7b1fa2',
    marginTop: 5,
  },
  outStock: {
    fontSize: 14,
    color: '#cccccc',
    marginTop: 5,
  },
  title: {
    fontSize: 18,
    color: '#212121',
    marginTop: 5,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#212121',
    marginTop: 5,
  },
  colorTitle: {
    fontSize: 18,
    color: '#212121',
    marginTop: 20,
  },
  relatedTitle: {
    fontSize: 18,
    color: '#212121',
    marginTop: Platform.OS === 'ios' ? 0 : 10,
    marginBottom: 10,
  },
  productDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  productDetails: {
    flex: 0.5,
  },
  buyButtonContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productContainer: {
    flex: 1,
  },
});
class ProductsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledButton: true,
      showList: [],
      selected: {},
      lastestProducts: [],
    };
  }
  async componentDidMount() {
    const {colors} = this.props.route.params;
    await this.props.getLastetsProducts();
    const result = this.props.lastestProducts;
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      lastestProducts: result.lastestProducts,
    });

    this.createShowList(colors.length);
  }
  goToProduct = (item, index) => {
    const product = {...item};
    console.warn('product', product);
    this.props.navigation.setParams(product);
    this.setState({
      disabledButton: true,
    });
    this.createShowList(product.colors.length);
  };
  goToCart = async () => {
    const {selected} = this.state;
    const product = this.props.route.params;
    const products = {...product};
    products.color = this.state.selected.color;
    await this.props.setCartProducts(products);
    this.props.navigation.navigate('ShoppingCart', {
      products,
      selectedProduct: selected,
    });
  };
  createShowList = (length) => {
    const showList = [];
    for (let i = 0; i < length; i++) {
      showList.push(false);
    }
    this.setState({
      showList,
    });
  };
  updateShowList = (index) => {
    let showList = [];
    const {length} = this.state.showList;
    if (this.state.showList[index] === true) {
      showList = [...this.state.showList];
      showList[index] = false;
    } else {
      for (let i = 0; i <= length; i++) {
        if (i === index) {
          showList.push(true);
        } else {
          showList.push(false);
        }
      }
    }
    this.setState({
      showList,
    });
  };
  selectProduct = (item, index) => {
    this.updateShowList(index);
    this.setState({
      selected: item,
      disabledButton: this.state.showList[index],
    });
  };
  render() {
    const {disabledButton, showList, lastestProducts} = this.state;
    const {
      _id,
      price,
      qty,
      name,
      description,
      productImage,
      imagesProducts,
      colors,
    } = this.props.route.params;
    return (
      <SafeAreaView style={styles.containerSafeArea}>
        <ScrollView nestedScrollEnabled={true}>
          <View style={styles.container}>
            {imagesProducts ? (
              <ImageProductDetail
                image={{uri: productImage}}
                images={imagesProducts}
              />
            ) : null}
            <Text style={styles.price}>{`$ ${price}`}</Text>
            <View style={styles.productDetailsContainer}>
              <View style={styles.productDetails}>
                {qty === 0 ? (
                  <Text style={styles.outStock}>Out stock</Text>
                ) : (
                  <Text style={styles.stock}>In Stock</Text>
                )}
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle} numberOfLines={3}>
                  {description}
                </Text>
              </View>
              <View style={styles.buyButtonContainer}>
                <Button
                  onPressButton={this.goToCart}
                  title={'Comprar'}
                  disabled={disabledButton}
                />
              </View>
            </View>
            <Text style={styles.colorTitle}>{'Colors'}</Text>
            <View style={{height: height * 0.1}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={120}
                decelerationRate="fast">
                {colors.length > 0 &&
                  colors.map(
                    (item, index) =>
                      item.stock > 0 && (
                        <ColorsProduct
                          color={item.color}
                          active={showList[index]}
                          onPress={() => this.selectProduct(item, index)}
                        />
                      ),
                  )}
              </ScrollView>
            </View>
            {lastestProducts.length > 0 ? (
              <>
                <Text style={styles.relatedTitle}>{'Lastest Products'}</Text>
                <View style={styles.productContainer}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={100}
                    decelerationRate="fast">
                    {lastestProducts.length > 0 &&
                      lastestProducts.map(
                        (item, index) =>
                          _id &&
                          item.qty > 0 &&
                          item._id !== _id && (
                            <CardRelated
                              onPress={() => this.goToProduct(item, index)}
                              backgroundColor={item.color}
                              imageProduct={{uri: item.productImage}}
                              productName={item.name}
                              productPrice={item.price}
                            />
                          ),
                      )}
                  </ScrollView>
                </View>
              </>
            ) : null}
          </View>
        </ScrollView>
        <MenuFooter navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.cartReducer,
    lastestProducts: state.productReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCartProducts: (data) => dispatch(cartActions.setCartProduct(data)),
    getLastetsProducts: () => dispatch(productActions.getAllLastestProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDetails);
