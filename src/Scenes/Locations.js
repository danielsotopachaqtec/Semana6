import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSafeArea: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  maps: {...StyleSheet.absoluteFillObject},
});

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };

    Geolocation.getCurrentPosition(
      (position) => {
        console.warn(position);
        this.setState({
          region: {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        });
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
        throw error;
      },
      {
        showLocationDialog: true,
        forceRequestLocation: true,
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  }
  onRegionChange = (region) => {
    this.setState({region});
  };

  render() {
    const {
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    } = this.state.region;
    return (
      <MapView
        style={styles.maps}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta,
          longitudeDelta,
        }}
        region={this.state.region}
        onRegionChange={(ref) => (this.onRegionChange = ref)}
        showsUserLocation={true}
        showsMyLocationButton={true}
        onPress={(e) =>
          this.setState({
            coordinate: e.nativeEvent.coordinate,
          })
        }>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          title={'Home'}
          description={'Home Office'}
          onPress={(e) =>
            this.setState({
              coordinate: e.nativeEvent.coordinate,
            })
          }
        />
      </MapView>
    );
  }
}

export default Locations;
