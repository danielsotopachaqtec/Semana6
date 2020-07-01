import React from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  colorContainer: {
    width: width * 0.13,
    height: 55,
    borderRadius: 40,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#ffffff',
  },
});

const ColorsProduct = (props) => {
  const {color, onPress, active} = props;
  const selectedProduct = (item, index) => {
    console.warn(' this.props.selected Function', onPress);
    onPress && onPress(item, index);
  };
  return (
    <TouchableOpacity onPress={selectedProduct}>
      <View style={[styles.colorContainer, {backgroundColor: color}]}>
        {active ? (
          <FontAwesomeIcon icon={faCheck} style={styles.icon} size={20} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export {ColorsProduct};
