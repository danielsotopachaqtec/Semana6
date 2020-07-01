import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import SuccessIcon from '../../assets/Success';
import Button from '../Components/Forms/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  containerSafeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    flex: 1,
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    width: '100%',
    backgroundColor: '#93278f',
    height: 50,
    marginHorizontal: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  text: {
    marginTop: 20,
    fontSize: 14,
  },
});

export default class SuccessPayment extends Component {
  constructor(props) {
    super(props);
  }
  goHome = () => {
    console.warn('this.props', this.props);
    this.props.navigation.navigate('Index');
  };
  render() {
    return (
      <SafeAreaView style={styles.containerSafeArea}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <SuccessIcon height={90} width={90} />
            <Text style={styles.text}>
              Su orden ha sido concretada exitosamente.
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPressButton={this.goHome}
              styleButton={styles.button}
              styleText={styles.buttonText}
              title={'Ir a Home'}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
