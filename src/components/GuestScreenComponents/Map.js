import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_API_KEY} from '../../config/constants';
import {
  getAllMasjidDetails,
  getMasjidDetails,
} from '../../store/Slices/MasjidDataSlice';
import LoadingScreen from '../../screens/loadingScreen/LoadingScreen';

// const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your Google Maps API key

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const Map = () => {
  const [location, setLocation] = useState({myLat: 24.827, myLong: 67.0251});
  const [destination, setDestination] = useState(null);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   Geolocation.getCurrentPosition(
  //     info => {
  //       setLocation({
  //         myLat: info.coords.latitude,
  //         myLong: info.coords.longitude,
  //       });
  //       console.log(info);
  //       // dispatch(location);
  //     },
  //     // info => console.log(info),
  //     error => console.log(error),
  //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  //   );r
  // }, []);

  useEffect(() => {
    dispatch(getAllMasjidDetails(location));
  }, []);

  const {MasjidsDetails} = useSelector(state => state.masjidSlice);

  const handleMarkerPress = marker => {
    setDestination({
      latitude: marker.latitude,
      longitude: marker.longitude,
    });
  };

  const allMarkers = MasjidsDetails?.map(marker => (
    <Marker
      coordinate={{
        latitude: marker?.latitude,
        longitude: marker?.longitude,
      }}
      tracksViewChanges = {false}
      title={marker?.name}
      key={marker?.id}
      onPress={() => handleMarkerPress(marker)}>
      <View style={styles.markerView}>
        <Image
          source={require('../../assets/images/MarkerIcon.png')}
          style={{width: 15, height: 15}}
        />
        {/* <Text style={styles.markerText}>{truncateText(marker.name, 20)}</Text> */}
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
            strokeWidth={3}
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
