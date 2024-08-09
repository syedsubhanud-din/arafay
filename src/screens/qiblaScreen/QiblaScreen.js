import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Qibla from '../../components/QiblaScreenComponents/Qibla';
import AppBar from '../../components/QiblaScreenComponents/AppBar';

const QiblaScreen = () => {
  return (
    <>
      <AppBar />
      <Qibla />
    </>
  );
};

export default QiblaScreen;

const styles = StyleSheet.create({});
