import React from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';

import {
  CardProduct,
  PRODUCT_HEIGHT as DEFAULT_PRODUCT_HEIGHT,
} from './CardProducts';

export const MARGIN = 16;
export const PRODUCT_HEIGHT = DEFAULT_PRODUCT_HEIGHT + MARGIN * 2;
const {height: wHeight} = Dimensions.get('window');
const height = wHeight - 64;
const style = StyleSheet.create({
  card: {
    marginVertical: MARGIN,
    alignSelf: 'center',
  },
});

const ProductCard = (props) => {
  const {item, y, index, onPress} = props;
  const position = Animated.subtract(index * PRODUCT_HEIGHT, y);
  const isDisappearing = -PRODUCT_HEIGHT;
  const isTop = 0;
  const isBottom = height - PRODUCT_HEIGHT;
  const isAppearing = height;
  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, 0.00001 + index * PRODUCT_HEIGHT],
        outputRange: [0, -index * PRODUCT_HEIGHT],
        extrapolateRight: 'clamp',
      }),
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -PRODUCT_HEIGHT / 4],
      extrapolate: 'clamp',
    }),
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp',
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });
  const goToProduct = (items, idx) => {
    return onPress && onPress(items, idx);
  };
  return (
    <Animated.View
      style={[style.card, {opacity, transform: [{translateY}, {scale}]}]}
      key={index}>
      <CardProduct onPress={goToProduct} item={item} />
    </Animated.View>
  );
};

export {ProductCard};
