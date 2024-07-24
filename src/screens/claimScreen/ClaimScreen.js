import {StyleSheet, View, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import AppBar from '../../components/ClaimScreenComponents/AppBar';
import ClaimForm from '../../components/ClaimScreenComponents/ClaimForm';

const ClaimScreen = () => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require('../../assets/images/RegisterBG.jpeg')}
        style={styles.imageBg}>
        <View style={styles.overlay}></View>
        <AppBar />
        <ScrollView>
          <ClaimForm />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ClaimScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  imageBg: {
    flex: 1,
  },
  overlay: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.7,
  },
});
