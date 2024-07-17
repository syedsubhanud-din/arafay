import {StyleSheet, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
    return () => clearTimeout();
  }, [navigation]);
  return (
    <ImageBackground
      source={require('../../assets/images/splash.png')}
      style={styles.background}
    />
  );
};

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
