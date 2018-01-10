import React from 'react';
import { StyleSheet, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps'; // 0.19.0
import "prop-types"; // Supported builtin module
//import { MapView } from "expo";
//import { StackNavigator } from 'react-navigation';
// 1.0.0-beta.23

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 47.6062;
const LONGITUDE = -122.3321;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MapScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mapRegion: { latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA, },
      markers: [],
    };
  }
  static navigationOptions = {
    title: 'Welcome',
  };

  // state = {
  //   mapRegion: { latitude: 47.6062, longitude: -122.3321, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }
  // };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  render() {
    return (
      
      <MapView provider={this.props.provider} style={styles.map} initialRegion={this.state.mapRegion} onRegionChange={this._handleMapRegionChange}>
        <MapView.Marker key={1} coordinate={{latitude: 47.6062, longitude: -122.3321}}/>
      </MapView>
      
    );
  }
}

MapScreen.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

module.exports = MapScreen;