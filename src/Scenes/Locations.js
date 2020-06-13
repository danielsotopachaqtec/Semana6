import React , { useState, Component} from 'react';
import { View, Dimensions, Animated, Text, SafeAreaView, StyleSheet, Button, StatusBar, Platform, PermissionsAndroid} from 'react-native'
import MenuFooter from '../Components/Menu/MenuFooter'
import Geolocation from '@react-native-community/geolocation';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerSafeArea: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    },
    maps: {...StyleSheet.absoluteFillObject}
})

class Locations extends Component{
    constructor(props){
        super(props)
        if (Platform.OS === "android") {
            this.requestLocationPermission();
        }

        this.state = {
            region: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        }

        Geolocation.getCurrentPosition(
            (position) => {
                console.warn(position);
                this.setState({
                    region: {
                        longitude: position.coords.longitude,
                        latitude: position.coords.latitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }
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
                maximumAge: 10000 
            }
        );
        
    }
    requestLocationPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            {
              title: "Example App",
              message: "Example App access to your location "
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the location");
            alert("You can use the location");
          } else {
            console.log("location permission denied");
            alert("Location permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
    }
    onRegionChange = (region) => {
    this.setState({ region });
    }
    
    render(){
        const { navigation } = this.props;
        const { latitude, longitude, latitudeDelta, longitudeDelta } = this.state.region
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
                    onRegionChange={ref => this.onRegionChange = ref}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    onPress={(e) => (this.setState({
                        coordinate: e.nativeEvent.coordinate
                    }))}
                >
                <Marker
                    coordinate={{
                        latitude: latitude,
                        longitude: longitude
                    }}
                    title={'Home'}
                    description={'Home Office'}
                    onPress={(e) => (this.setState({
                        coordinate: e.nativeEvent.coordinate
                    }))}
                />
                </MapView>
        )
    }
}

export default Locations;