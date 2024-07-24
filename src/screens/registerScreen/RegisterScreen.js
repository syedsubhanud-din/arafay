import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppBar from '../../components/RegisterScreenComponents/AppBar';

import RegisterationFrom from '../../components/RegisterScreenComponents/RegisterationFrom';
const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require('../../assets/images/RegisterBG.jpeg')}
        style={styles.imageBg}>
        <View style={styles.overlay}></View>
        <AppBar />
        <ScrollView>
          <RegisterationFrom />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;

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
