import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import React from 'react';
import AppBar from '../../components/GuestScreenComponents/AppBar';
import NearBySection from '../../components/GuestScreenComponents/NearBySection';
import Map from '../../components/GuestScreenComponents/Map';

const GuestScreen = () => {
  return (
    <View style={styles.main}>
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
