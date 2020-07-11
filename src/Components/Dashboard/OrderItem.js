import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginVertical: 5,
  },
  containerImage: {
    flex: 0.3,
  },
  image: {
    width: 80,
    height: 120,
  },
  containerDetail: {
    flex: 0.6,
  },
  productName: {
    fontSize: 16,
    color: '#212121',
    marginHorizontal: 10,
  },
  colorDetail: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  color: {
    width: 20,
    height: 20,
    borderRadius: 40,
    marginLeft: 10,
    marginVertical: 16,
  },
  price: {
    fontSize: 20,
    color: '#212121',
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
});

const OrderItem = (props) => {
  const {productImage, productName, color, price, onPress, key} = props;
  const gotoDetails = (item, index) => {
    onPress && onPress(item, index);
  };
  return (
    <TouchableOpacity key={key} onPress={gotoDetails}>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          {productImage ? (
            <Image style={styles.image} source={{uri: productImage}} />
          ) : null}
        </View>
        <View style={styles.containerDetail}>
          {productName ? (
            <Text style={styles.productName}>{productName}</Text>
          ) : null}
          {color ? (
            <View style={styles.colorDetail}>
              <Text>Color</Text>
              <View style={[styles.color, {backgroundColor: color}]} />
            </View>
          ) : null}
          {price ? <Text style={styles.price}>{`$ ${price}`}</Text> : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export {OrderItem};
