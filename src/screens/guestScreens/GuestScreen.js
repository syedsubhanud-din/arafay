import {BackHandler, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import React, { useCallback } from 'react';
import AppBar from '../../components/GuestScreenComponents/AppBar';
import NearBySection from '../../components/GuestScreenComponents/NearBySection';
import Map from '../../components/GuestScreenComponents/Map';
import { useFocusEffect } from '@react-navigation/native';

const GuestScreen = () => {
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
