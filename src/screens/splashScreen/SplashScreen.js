import {StyleSheet, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
const SplashScreen = ({navigation}) => {
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // navigation.navigate('guest');
      navigation.navigate('UserLeaderBoard');
    }, 3000);
    return () => clearTimeout(timeoutId);
  },[navigation])

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
