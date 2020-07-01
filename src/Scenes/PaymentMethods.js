import React from 'react';
import {Animated, FlatList} from 'react-native';

// import { CardProducts } from '../Components/CardProducts/CardProducts'
import {CardListPayment} from '../Components/ShoppingCart/CardListPayment';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const paymentMethods = [
  {
    imageBrand:
      'https://logos-marcas.com/wp-content/uploads/2020/04/Visa-Logo.png',
    color: '#F9F9F9',
  },
  {
    imageBrand:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png',
    color: '#F9F9F9',
  },
  {
    imageBrand:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Google_Pay_%28GPay%29_Logo.svg/1200px-Google_Pay_%28GPay%29_Logo.svg.png',
    color: '#F9F9F9',
  },
  {
    imageBrand:
      'https://www.soydemac.com/wp-content/uploads/2014/12/apple-pay-logo.png',
    color: '#F9F9F9',
  },
  {
    imageBrand:
      'https://i1.wp.com/www.bluewindmarketing.com/wp-content/uploads/2020/02/american-express-logo.png',
    color: '#F9F9F9',
  },
];

const PaymentMethods = (props) => {
  const {product, selectedProduct} = props.route.params;
  const goToPay = (item, index) => {
    console.warn('props.navigation', props.navigation);
    props.navigation.navigate('Checkout', {
      product: product,
      selectedProduct: selectedProduct,
      paymentMethods: item,
    });
  };
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {
    useNativeDriver: true,
  });
  return (
    <AnimatedFlatList
      scrollEventThrottle={16}
      bounces={false}
      data={paymentMethods}
      renderItem={({index, item}) => (
        <CardListPayment
          onPress={() => goToPay(item, index)}
          item={item}
          y={y}
          index={index}
          // {...{item, y, index }}
        />
      )}
      keyExtractor={(item) => item.index}
      {...{onScroll}}
    />
  );
};
export default PaymentMethods;
