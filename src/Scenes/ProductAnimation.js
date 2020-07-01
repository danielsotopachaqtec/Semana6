import React from 'react';
import {Animated, FlatList} from 'react-native';

// import { CardProducts } from '../Components/CardProducts/CardProducts'
import {ProductCard} from '../Components/CardProducts/ProductCard';

const products = [
  {
    imageBrand: {
      uri: 'http://pngimg.com/uploads/apple_logo/apple_logo_PNG19692.png',
    },
    imageProduct: {
      uri:
        'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
    },
    imagesProducts: [
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
    ],
    qty: 10,
    colors: [
      {color: '#ff80ab', stock: 5},
      {color: '#37474f', stock: 5},
    ],
    productName: 'Iphone Xs 64Gb',
    description: 'new Iphone 2020 collection',
    productPrice: '$1250',
    color: '#7b1fa2',
  },
  {
    imageBrand: {
      uri: 'http://pngimg.com/uploads/apple_logo/apple_logo_PNG19692.png',
    },
    imageProduct: {
      uri:
        'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
    },
    imagesProducts: [
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
    ],
    description: 'new Iphone 2020 collection',
    qty: 10,
    colors: [
      {color: '#ff8f00', stock: 5},
      {color: '#558b2f', stock: 5},
    ],
    productName: 'Iphone Xs 64Gb',
    productPrice: '$1250',
    color: '#d32f2f',
  },
  {
    imageBrand: {
      uri: 'http://pngimg.com/uploads/apple_logo/apple_logo_PNG19692.png',
    },
    imageProduct: {
      uri:
        'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
    },
    imagesProducts: [
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
    ],
    description: 'new Iphone 2020 collection',
    qty: 30,
    colors: [
      {color: '#ff8f00', stock: 5},
      {color: '#558b2f', stock: 5},
      {color: '#d4e157', stock: 5},
      {color: '#00bfa5', stock: 5},
      {color: '#00b0ff', stock: 5},
      {color: '#1565c0', stock: 5},
    ],
    productName: 'Iphone Xs 64Gb',
    productPrice: '$1250',
    color: '#1976d2',
  },
  {
    imageBrand: {
      uri: 'http://pngimg.com/uploads/apple_logo/apple_logo_PNG19692.png',
    },
    imageProduct: {
      uri:
        'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
    },
    imagesProducts: [
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
    ],
    description: 'new Iphone 2020 collection',
    qty: 5,
    colors: [{color: '#ff8f00', stock: 5}],
    productName: 'Iphone Xs 64Gb',
    productPrice: '$1250',
    color: '#0097a7',
  },
  {
    imageBrand: {
      uri: 'http://pngimg.com/uploads/apple_logo/apple_logo_PNG19692.png',
    },
    imageProduct: {
      uri:
        'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
    },
    imagesProducts: [
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
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
    color: '#388e3c',
  },
  {
    imageBrand: {
      uri: 'http://pngimg.com/uploads/apple_logo/apple_logo_PNG19692.png',
    },
    imageProduct: {
      uri:
        'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
    },
    imagesProducts: [
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
      {
        uri:
          'https://equiposlibres.pe/wp-content/uploads/2018/10/iphone_Xs_64gb_gold_sku_header.png',
      },
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
    color: '#ffa000',
  },
];

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const ProductAnimation = (props) => {
  const goToProduct = (item, index) => {
    console.warn('props.navigation', props.navigation);
    props.navigation.navigate('ProductsDetails', item);
  };
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {
    useNativeDriver: true,
  });
  return (
    <AnimatedFlatList
      scrollEventThrottle={16}
      bounces={false}
      data={products}
      renderItem={({index, item}) => (
        <ProductCard
          onPress={() => goToProduct(item, index)}
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
export default ProductAnimation;
