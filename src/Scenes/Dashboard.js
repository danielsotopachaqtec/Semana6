import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import Action from '../actions/OrdersAction';
import MenuFooter from '../Components/Menu/MenuFooter';
import Button from '../Components/Forms/Button';
import CustomModal from '../Components/Modal/CustomModal';
import {OrderItem} from '../Components/Dashboard/OrderItem';
import Api from '../Api';
const height = Dimensions.get('window').height;
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
  buttonContainerModal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#93278f',
    marginTop: 18,
    height: Platform.OS === 'android' ? height * 0.08 : width * 0.12,
    borderRadius: 5,
  },
  textButtonModal: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ordersContainer: {
    flex: 1,
    marginTop: 30,
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      orders: [],
      error: '',
    };
  }
  async componentDidMount() {
    await this.props.getOrders();
    const result = this.props.data;
    if (result.errors) {
      console.warn('data errors', result.errors);
    } else {
      this.setState({
        orders: result.orders.data,
      });
    }
  }
  goToOrder = (item) => {
    this.props.navigation.navigate('OrderDetail', {
      order: item,
      name: item.product.name,
    });
  };
  render() {
    const {isVisible, orders, error} = this.state;
    return (
      <SafeAreaView style={styles.containerSafeArea}>
        <ScrollView nestedScrollEnabled={true}>
          <View style={styles.container}>
            <View style={styles.ordersContainer}>
              <Text style={styles.title}> My Orders</Text>
              {orders.length !== 0 &&
                orders.map((item, index) => (
                  <OrderItem
                    key={index}
                    productImage={item.product.productImage}
                    productName={item.product.name}
                    color={item.color}
                    price={item.totalPrice}
                    onPress={() => {
                      this.goToOrder(item);
                    }}
                  />
                ))}
              {error ? <Text style={styles.title}> {error}</Text> : null}
            </View>
          </View>
        </ScrollView>
        <CustomModal
          visible={isVisible}
          backdrop={() =>
            this.setState({
              isVisible: false,
            })
          }
          title={'Ha ocurrido un error'}
          message={'Intentelo mas tarde.'}
          iconError={true}>
          <Button
            onPressButton={() =>
              this.setState({
                isVisible: false,
              })
            }
            styleButton={styles.buttonContainerModal}
            styleText={styles.textButtonModal}
            title="Entendido"
          />
        </CustomModal>
        <MenuFooter navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.ordersReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: () => dispatch(Action.getOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
