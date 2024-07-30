import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import {useSelector} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_API_KEY} from '../../config/constants';

// const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your Google Maps API key

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const Map = () => {
  const [location, setLocation] = useState({myLat: 24.9204, myLong: 67.1344});
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info =>
        setLocation({
          myLat: info.coords.latitude,
          myLong: info.coords.longitude,
        }),
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  console.log(location);

  const MasjidData = useSelector(state => state.masjidInfo);

  const handleMarkerPress = marker => {
    setDestination({
      latitude: marker.location.latitude,
      longitude: marker.location.longitude,
    });
  };

  const allMarkers = MasjidData.map(marker => (
    <Marker
      coordinate={{
        latitude: marker.location.latitude,
        longitude: marker.location.longitude,
      }}
      title={marker.name}
      key={marker._id}
      onPress={() => handleMarkerPress(marker)}>
      <View style={styles.markerView}>
        <Image
          source={require('../../assets/images/MarkerIcon.png')}
          style={{width: 15, height: 15}} // Adjust the width and height to your desired size
        />
        <Text style={styles.markerText}>{truncateText(marker.name, 20)}</Text>
      </View>
    </Marker>
  ));

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        userInterfaceStyle="dark"
        showsUserLocation={true}
        initialRegion={{
          latitude: location.myLat,
          longitude: location.myLong,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: location.myLat,
            longitude: location.myLong,
          }}
        />
        {allMarkers}
        {destination && (
          <MapViewDirections
            origin={{latitude: location.myLat, longitude: location.myLong}}
            destination={destination}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={2}
            strokeColor="#0075B7"
          />
        )}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: -1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 5,
    width: 100,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
