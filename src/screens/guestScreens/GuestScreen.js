import {
  Alert,
  BackHandler,
  KeyboardAvoidingView,
  PermissionsAndroid,
  StyleSheet,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import AppBar from '../../components/GuestScreenComponents/AppBar';
import NearBySection from '../../components/GuestScreenComponents/NearBySection';
import Map from '../../components/GuestScreenComponents/Map';
import {useFocusEffect} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

const GuestScreen = () => {
  // const [location, setLocation] = useState(null);

  // useEffect(() => {
  //   const getLocation = () => {
  //     Geolocation.getCurrentPosition(
  //       position => {
  //         setLocation({
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //           latitudeDelta: 0.01,
  //           longitudeDelta: 0.01,
  //         });
  //         console.log(position)
  //       },
  //       error => {
  //         Alert.alert('Error', `Code ${error.code}, Message: ${error.message}`);
  //       },
  //       {enableHighAccuracy: true, timeout: 30000, maximumAge: 10000},
  //     );
  //   };
  //   const requestLocationPermission = async () => {
  //     if (Platform.OS === 'android') {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         {
  //           title: 'Location Permission',
  //           message:
  //             'This app needs access to your location to show it on the map.',
  //           buttonNeutral: 'Ask Me Later',
  //           buttonNegative: 'Cancel',
  //           buttonPositive: 'OK',
  //         },
  //       );
  //       if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
  //         Alert.alert(
  //           'Permission Denied',
  //           'Location permission is required to show your location on the map.',
  //         );
  //       } else {
  //         getLocation();
  //       }
  //     } else {
  //       getLocation();
  //     }
  //   };

  //   requestLocationPermission();
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
      {/* {console.log(location)} */}
      <AppBar />
      <Map />
      <NearBySection />
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <NearBySection />
      </KeyboardAvoidingView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  // keyboard: {
  //   flex: 1,
  //   width: '100%',
  // },
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
