import {
  Alert,
  BackHandler,
  KeyboardAvoidingView,
  PermissionsAndroid,
  StyleSheet,
  View,
  Platform,
  Text,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import AppBar from '../../components/GuestScreenComponents/AppBar';
import NearBySection from '../../components/GuestScreenComponents/NearBySection';
import Map from '../../components/GuestScreenComponents/Map';
import {useFocusEffect} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch, useSelector} from 'react-redux';

const GuestScreen = () => {
  const dispatch = useDispatch();
  const {searchCoords} = useSelector(state => state?.masjidSlice);
  console.log("SearchCoords" , searchCoords);
  const [location, setLocation] = useState(null);
  const {loading} = useSelector(state => state.masjidSlice);

  // const getLocation = () => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       setLocation({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //         latitudeDelta: 0.01,
  //         longitudeDelta: 0.01,
  //       });
  //       console.log(position);
  //     },
  //     error => {
  //       Alert.alert('Error', `Code ${error.code}, Message: ${error.message}`);
  //     },
  //     {enableHighAccuracy: true, timeout: 30000, maximumAge: 10000},
  //   );
  // };

  // const getLocation = () => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       setLocation({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //         latitudeDelta: 0.01,
  //         longitudeDelta: 0.01,
  //       });
  //       // console.log('position', position);
  //     },
  //     error => {
  //       if (error.code === 3) {
  //         // TIMEOUT error code
  //         // Try again with lower accuracy
  //         Geolocation.getCurrentPosition(
  //           position => {
  //             setLocation({
  //               latitude: position.coords.latitude,
  //               longitude: position.coords.longitude,
  //               latitudeDelta: 0.01,
  //               longitudeDelta: 0.01,
  //             });
  //             // console.log('lower accuracy', position);
  //           },
  //           error => {
  //             Alert.alert(
  //               'Error',
  //               `Code ${error.code}, Message: ${error.message}`,
  //             );
  //           },
  //           {enableHighAccuracy: false, timeout: 60000, maximumAge: 10000},
  //         );
  //       } else {
  //         Alert.alert('Error', `Code ${error.code}, Message: ${error.message}`);
  //       }
  //     },
  //     {enableHighAccuracy: true, timeout: 60000, maximumAge: 10000},
  //   );
  // };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position);
      },
      error => {
        console.log(error.message);
      },
      {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
    );
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'This app needs access to your location to show it on the map.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert(
          'Permission Denied',
          'Location permission is required to show your location on the map.',
        );
      } else {
        getLocation();
      }
    } else {
      getLocation();
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  // useEffect(() => {
  //   if (location) {
  //     console.log('location', location.coords);
  //   }
  // }, [location]);

  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        BackHandler.exitApp();
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }, []),
  );

  return (
    <View style={styles.main}>
      <AppBar />
      {/* {location?.coords && (
        <Map
          locationCoords={location.coords}
          // locationCoords={{
          //   latitude: 24.827,
          //   longitude: 67.0251,
          //   latitudeDelta: 0.01,
          //   longitudeDelta: 0.01,
          // }}
        />
      )} */}

      {searchCoords ? (
        <Map
          locationCoords={{
            latitude: searchCoords?.lat,
            longitude: searchCoords?.lng,
          }}
        />
      ) : location?.coords ? (
        <Map locationCoords={location.coords} />
      ) : (
        <View>
          <Text>Fetching location...</Text>
        </View>
      )}
      <NearBySection />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollableContainer: {
    height: '100%',
  },
  main: {
    flex: 1,
    borderWidth: 2,
    justifyContent: 'space-between',
    height: '100%',
  },
});

export default GuestScreen;
