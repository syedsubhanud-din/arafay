// src/screens/HomeScreen.js
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  BackHandler,
  ImageBackground,
} from 'react-native';
import {Buttons} from '../../components/HomeScreenComponents/Buttons';
import MainHeading from '../../components/HomeScreenComponents/MainHeading';
import ArabicText from '../../components/HomeScreenComponents/ArabicText';
import HomeDetails from '../../components/HomeScreenComponents/HomeDetails';

function HomeScreen() {
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <ImageBackground source={require('../../assets/images/homeBg.png')}>
      <View style={styles.MainHomeContainer}>
        <View style={{alignItems: 'center'}}>
          <MainHeading />
          <ArabicText />
          <HomeDetails />
          <Buttons />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  MainHomeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default HomeScreen;
