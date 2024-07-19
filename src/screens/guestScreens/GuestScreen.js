import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import AppBar from '../../components/GuestScreenComponents/AppBar';
import NearBySection from '../../components/GuestScreenComponents/NearBySection';
import Map from '../../components/GuestScreenComponents/Map';

const GuestScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/masjidDetailsBg.png')}
      style={styles.background}>
      {/* <ScrollView style={styles.scrollableContainer}>
      </ScrollView> */}
      <View style={styles.main}>
        <AppBar />
        <Map />
        <NearBySection />
      </View>
    </ImageBackground>
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
