import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    marginLeft: 20,
  },
  image: {
    height: 36,
    width: 36,
  },
});

const MenuDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View styles={styles.drawerContent}>
          <View style={styles.userInfoSection} />
          <DrawerItem
            icon={() => (
              <Image
                style={styles.image}
                source={require('../../../assets/icons/025-warehouse.png')}
              />
            )}
            label="Home"
            onPress={() => {
              props.navigation.navigate('Index');
            }}
          />
          <DrawerItem
            icon={() => (
              <Image
                style={styles.image}
                source={require('../../../assets/icons/017-tracking.png')}
              />
            )}
            label="Dashboard"
            onPress={() => {
              props.navigation.navigate('Dashboard');
            }}
          />
          <DrawerItem
            icon={() => (
              <Image
                style={styles.image}
                source={require('../../../assets/icons/027-cargo.png')}
              />
            )}
            label="Intro"
            onPress={() => {
              props.navigation.navigate('Intro');
            }}
          />
          <DrawerItem
            icon={() => (
              <Image
                style={styles.image}
                source={require('../../../assets/icons/036-smartphone.png')}
              />
            )}
            label="Products"
            onPress={() => {
              props.navigation.navigate('Products');
            }}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export {MenuDrawer};
