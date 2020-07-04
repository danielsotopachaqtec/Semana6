import React from 'react';
import {ImageBackground, Text, StyleSheet, View} from 'react-native';

const headerImage = require('../../../assets/header.png');

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  header: {
    flex: 1,
  },
  title: {
    color: '#212121',
    fontWeight: 'bold',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

const HeaderTitle = (props) => {
  const {image, headerStyle, imageStyle, text, title, titleStyle} = props;

  return (
    <View style={headerStyle || styles.header}>
      <ImageBackground
        source={{uri: image} || headerImage}
        style={imageStyle || styles.imageBackground}>
        {text ? (
          <Text testID="textMessage" style={styles.text}>
            {text}
          </Text>
        ) : null}
        {title ? (
          <Text testID={'titleMessage'} style={titleStyle || styles.title}>
            {title}
          </Text>
        ) : null}
      </ImageBackground>
    </View>
  );
};

export {HeaderTitle};
