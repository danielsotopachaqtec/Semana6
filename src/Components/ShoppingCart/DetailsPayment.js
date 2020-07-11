import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../Forms/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  itemContent: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 15,
  },
  itemRow: {
    flex: 0.5,
  },
  itemRowEnd: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
  description: {
    fontSize: 15,
    color: '#cccccc',
  },
  value: {
    fontSize: 15,
    color: '#cccccc',
    fontWeight: 'bold',
  },
  buyButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: '#93278f',
    fontWeight: 'bold',
  },
});

const DetailsPayment = (props) => {
  const {price, shipping, onPress, disabled} = props;
  const totalPayment = price ? price + shipping : undefined;

  const goToBuy = () => {
    onPress && onPress();
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContent}>
        <View style={styles.itemRow}>
          <Text style={styles.description}>Subtotal</Text>
        </View>
        {price ? (
          <View style={styles.itemRowEnd}>
            <Text style={styles.value}>{`$ ${price.toFixed(2)}`}</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.itemContent}>
        <View style={styles.itemRow}>
          <Text style={styles.description}>Shipping</Text>
        </View>
        <View style={styles.itemRowEnd}>
          <Text style={styles.value}>{`$ ${shipping.toFixed(2)}`}</Text>
        </View>
      </View>
      <View style={styles.itemContent}>
        <View style={styles.itemRow}>
          <Text style={styles.text}>Total</Text>
        </View>
        {totalPayment ? (
          <View style={styles.itemRowEnd}>
            <Text style={styles.text}>{`$ ${totalPayment.toFixed(2)}`}</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.buyButtonContainer}>
        <Button onPressButton={goToBuy} title={'Comprar'} disabled={disabled} />
      </View>
    </View>
  );
};

export {DetailsPayment};
